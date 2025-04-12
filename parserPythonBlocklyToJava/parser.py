import tkinter as tk
from tkinter import scrolledtext, messagebox
import re
import os
import subprocess

# Nom complet de la classe principale
MAIN_CLASS = "ev3.robot.Main"

def extract_files_from_text(input_text):
    pattern = re.compile(
        r"###(.*?)###DEBUT###(.*?)###\1###FIN###",
        re.DOTALL
    )
    
    matches = pattern.findall(input_text)
    
    if not matches:
        messagebox.showwarning("Aucun bloc trouvé", "Aucun bloc avec les délimiteurs spécifiés n'a été trouvé.")
        return
    
    base_dir = os.path.dirname(os.path.abspath(__file__))
    tmp_dir = os.path.join(base_dir, "tmp")
    os.makedirs(tmp_dir, exist_ok=True)

    java_files_relative = []

    for filename, content in matches:
        filename = filename.strip()
        full_path = os.path.join(tmp_dir, filename)
        
        # Crée les sous-dossiers si nécessaires (ex: ev3/robot/)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content.strip())

        if filename.endswith(".java"):
            java_files_relative.append(filename)

    if java_files_relative:
        try:
            # Compilation en gardant les chemins relatifs dans tmp/
            compile_cmd = ["javac"] + java_files_relative
            subprocess.run(compile_cmd, check=True, cwd=tmp_dir)

            # Création du MANIFEST
            manifest_content = f"Main-Class: {MAIN_CLASS}\n"
            manifest_path = os.path.join(tmp_dir, "manifest.txt")
            with open(manifest_path, "w") as mf:
                mf.write(manifest_content)

            # Création du .jar
            jar_name = "mon_programme.jar"
            jar_cmd = ["jar", "cfm", jar_name, "manifest.txt"]

            # Ajouter tous les .class avec structure de package
            for root, dirs, files in os.walk(tmp_dir):
                for file in files:
                    if file.endswith(".class"):
                        relative_path = os.path.relpath(os.path.join(root, file), tmp_dir)
                        jar_cmd.append(relative_path)

            subprocess.run(jar_cmd, check=True, cwd=tmp_dir)

            # Exécution
            subprocess.run(["java", "-jar", jar_name], cwd=tmp_dir)

            messagebox.showinfo("Succès", f"JAR exécuté avec succès : {jar_name}")
        except subprocess.CalledProcessError as e:
            messagebox.showerror("Erreur Java", f"Erreur compilation ou exécution du JAR.\n{e}")
    else:
        messagebox.showinfo("Aucun fichier Java", "Aucun fichier .java trouvé dans les blocs.")

def on_submit():
    input_text = text_area.get("1.0", tk.END)
    extract_files_from_text(input_text)

# UI
root = tk.Tk()
root.title("Découpeur + JAR EV3")

text_area = scrolledtext.ScrolledText(root, width=100, height=30)
text_area.pack(padx=10, pady=10)

submit_button = tk.Button(root, text="Découper, compiler, créer JAR, exécuter", command=on_submit)
submit_button.pack(pady=10)

root.mainloop()
