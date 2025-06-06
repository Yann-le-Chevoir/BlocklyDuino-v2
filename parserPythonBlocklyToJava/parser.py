from flask import Flask, request
from flask_cors import CORS
import os
import re
import subprocess
import threading
import time
import psutil  # pip install psutil

app = Flask(__name__)
CORS(app)

PROJECT_DIR = os.path.abspath("EV3-DragonsWPILib")  # Racine du projet Gradle
java_process = None  # Référence globale au processus Java

@app.route('/run_code', methods=['POST'])
def receive_code():
    data = request.get_json()
    code = data.get('code')

    if not code:
        return "Code non fourni", 400

    print(">>> Code reçu\n")
    try:
        process_java_blocks(code)
        build_and_run()
        return "Compilation et exécution terminées avec succès", 200
    except Exception as e:
        return f"Erreur : {str(e)}", 500

def process_java_blocks(input_text):
    pattern = re.compile(r"###(.*?)###DEBUT###(.*?)###\1###FIN###", re.DOTALL)
    matches = pattern.findall(input_text)

    if not matches:
        raise ValueError("Aucun bloc valide trouvé")

    src_dir = os.path.join(PROJECT_DIR, "src", "main", "java")
    os.makedirs(src_dir, exist_ok=True)

    for filename, content in matches:
        filename = filename.strip()
        content = content.strip()

        # Extraire le nom du package
        package_match = re.search(r'^\s*package\s+([\w.]+);', content, re.MULTILINE)
        if not package_match:
            raise ValueError(f"Package non trouvé dans {filename}")
        package_path = package_match.group(1).replace('.', os.sep)

        full_dir = os.path.join(src_dir, package_path)
        os.makedirs(full_dir, exist_ok=True)

        full_path = os.path.join(full_dir, filename)

        # Remplace uniquement ce fichier, sans supprimer les autres
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"✔ Fichier mis à jour : {full_path}")

def kill_process_tree(pid):
    try:
        proc = psutil.Process(pid)
        for child in proc.children(recursive=True):
            child.kill()
        proc.kill()
        proc.wait(timeout=5)
        print("✔ Processus Java complètement terminé")
    except Exception as e:
        print(f"⚠️ Erreur lors de la terminaison complète : {e}")

def build_and_run():
    global java_process

    print("🔧 Compilation avec Gradle...")

    gradlew = "gradlew.bat" if os.name == "nt" else "./gradlew"
    gradlew_path = os.path.join(PROJECT_DIR, gradlew)

    if not os.path.exists(gradlew_path):
        raise FileNotFoundError(f"Le script Gradle '{gradlew_path}' est introuvable.")

    result = subprocess.run(
        [gradlew_path, "shadowJar"],
        cwd=PROJECT_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    print("=== Gradle STDOUT ===\n", result.stdout)
    print("=== Gradle STDERR ===\n", result.stderr)

    if result.returncode != 0:
        raise RuntimeError("Gradle a échoué")

    # Vérifie que le JAR a bien été généré
    jar_path = os.path.join(PROJECT_DIR, "build", "libs", "DragonsWPILib-1.0.0-all.jar")
    if not os.path.exists(jar_path):
        raise FileNotFoundError(f"JAR introuvable : {jar_path}")

    # 🔴 Tuer le processus précédent s'il existe
    if java_process and java_process.poll() is None:
        print("🛑 Arrêt de l'ancien processus Java...")
        kill_process_tree(java_process.pid)
        java_process = None
        time.sleep(1)  # Attendre que les ports/sockets soient libérés

    # 🚀 Exécution du nouveau JAR
    print("🚀 Lancement du nouveau JAR...")
    java_process = subprocess.Popen(
        ["java", "-jar", jar_path],
        cwd=PROJECT_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True
    )

    # 🔁 Lecture en direct des logs Java
    def read_output(proc):
        for line in proc.stdout:
            print("[JAVA]", line.strip())

    threading.Thread(target=read_output, args=(java_process,), daemon=True).start()

if __name__ == '__main__':
    app.run(port=5000)
