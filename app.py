from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate-profile', methods=['POST'])
def generate_profile():
    data = request.get_json()

    profile = {
        "name": data["name"],
        "bio": data["bio"],
        "image": data["image"]
    }

    return jsonify(profile)

if __name__ == '__main__':
    app.run(debug=True)