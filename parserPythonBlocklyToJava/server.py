from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/run_code', methods=['POST'])
def receive_code():
    data = request.get_json()
    code = data.get('code')

    if not code:
        return "Code non fourni", 400

    print(">>> Code reçu :\n", code)

    return "Code reçu avec succès", 200

if __name__ == '__main__':
    app.run(port=5000)
