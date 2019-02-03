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

#Getting the mean for the points
@app.route('/getBasicData', methods=['GET'])
def route_two():
    data = Data()
    wine_point_mean = data.get_average_wine_data()
    return jsonify(wine_point_mean)

#Getting the lowest score
@app.route('/getlowestscore', methods=['GET'])
def route_three():
    data = Data()
    wine_point_lowest_score = int(data.get_lowest_score())
    return jsonify(wine_point_lowest_score)

#Getting the standard Deviation of points
@app.route('/getStandardDeviation', methods=['GET'])
def route_four():
    data = Data()
    wine_Point_STD = data.wine_standard_deviation()
    return jsonify(wine_Point_STD)

#This route will handle the information for the country section
@app.route('/countryWineInformation', methods=['GET', 'POST'])
def route_five():
    data = Data()
    if request.method == 'POST':
        post_data = request.get_json()
        country = post_data.get('country')
        mean = data.wine_mean_country(country)
        return jsonify(mean)

#This route will handle getting the top five wines for the country section
@app.route('/countryTopFive', methods=['GET', 'POST'])
def route_six():
    data = Data()
    if request.method == 'POST':
        post_data = request.get_json()
        country = post_data.get('country')
        top_five_list = data.top_five_wines_country(country)
        return jsonify(top_five_list)


if __name__ == '__main__':
    app.run()
