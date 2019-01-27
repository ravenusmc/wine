from flask import Flask, jsonify, request
from flask_cors import CORS

#importing files I wrote
from data import *

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)

# Getting highest rate wine
@app.route('/highestRatedWine', methods=['GET'])
def route_one():
    data = Data()
    wine_information_list = data.highest_rated_wine()
    return jsonify(wine_information_list)

@app.route('/getBasicData', methods=['GET'])
def route_two():
    data = Data()
    wine_basic_data = data.getBasicData()
    return jsonify(wine_basic_data)


if __name__ == '__main__':
    app.run()
