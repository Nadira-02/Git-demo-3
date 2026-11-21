import json
from flask import Flask, Response

app = Flask(__name__)

with open ("dictionary.json", "r", encoding="utf-8") as file:
    raw_dictionary = json.load(file)

dictionary = {key.lower(): value for key, value in raw_dictionary.items()}

@app.route("/translate/<word>")
def translate(word):
    lookup_word = word.lower()

    if lookup_word in dictionary:
        response = {
            "English": lookup_word,
            "Finnish": dictionary[lookup_word]
        }
        return response
    
    error_response ={
        "error": "Word not found",
    }
    json_response = json.dumps(error_response)
    http_response = Response(
        response=json_response,
        status=404,
        mimetype="application/json",
    )
    return http_response

@app.route("/words")
def get_words():
    return list(dictionary.keys())

if __name__ == "__main__":
    app.run(use_reloader=True, host="127.0.0.1", port=3000)

