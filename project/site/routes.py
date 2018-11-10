from flask import Blueprint, render_template

mod = Blueprint('site', __name__,template_folder='templates', static_folder='static',
                                                static_url_path='/static')

@mod.route('/')
def homepage():
  return render_template('site/index.html')

@mod.route('/about')
def about():
    return render_template('site/about.html')
