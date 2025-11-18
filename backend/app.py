from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/translate", methods=["POST"])
def translate():
    data = request.json
    text = data.get("text")
    source = data.get("source")
    target = data.get("target")

    # Default source language = English
    if not source or source == "":
        source = "en"

    URL = f"https://api.mymemory.translated.net/get?q={text}&langpair={source}|{target}"

    response = requests.get(URL)
    result = response.json()

    translated_text = result["responseData"]["translatedText"]
    return jsonify({"translated": translated_text})

if __name__ == "__main__":
    app.run(debug=True)
