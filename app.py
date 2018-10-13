#importing outside libraries
# from flask import Flask, render_template
#
# #Setting up Flask
# app = Flask(__name__)
#
#
# #This route takes the user to the landing page
# @app.route('/')
# def landing():
#     return render_template('landing.html')
#
#
# #This line will actually run the app.
# if __name__ == '__main__':
#     app.run(debug=True)

#This is the main file that will run this program

from project import app
app.run(debug=True)
