import random
import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder="./static")

def get_hello():
    rand_numb = ['1', '2', '3', '4', '5', '6']
    return random.choice(rand_numb)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/backend")
def hello():
    return get_hello()

@app.route("/public/<path:path>")
def get_public_file(path):
    full_path = os.path.join('./static/dist/public', path)
    head, tail = os.path.split(full_path)
    return send_from_directory(head, tail)

if __name__ == "__main__":
    app.run(debug=True)