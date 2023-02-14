from flask import Flask 
from flask_cors import cross_origin 

app = Flask(__name__)

@app.route('/')
@cross_origin()
def home():
    return {"member":"Member1"}



if __name__ == '__main__':
    app.run(host = '0.0.0.0')
