#importing outside libraries
from flask import Flask, session, jsonify, redirect, url_for, escape, render_template, request, flash 

app = Flask(__name__)

from project.site.routes import mod

app.register_blueprint(site.routes.mod)
