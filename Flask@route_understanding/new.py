# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return " This is page 1 and happy new year"

@app.route("/admin")
def hello_admin():
    return " This is page admin and happy new year"

@app.route("/admin2")
def hello_admin2():
    return " This is page admin 2 and happy new year"

@app.route("/admin2")
def hello_admin3():
    return " This is page admin 3 and happy new year"

app.run()