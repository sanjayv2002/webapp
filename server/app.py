from flask import Flask 


app = Flask(__name__)

@app.route('/')
def home():
    return {"member":"Member1"}



if __name__ == '__main__':
    app.run()