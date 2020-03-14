import os
from flask import Flask, render_template, request, json
import socket
import sys
import main
# flask is justa microweb framework. We are using it to set up a client server architecture between js and python


app = Flask(__name__)
@app.route('/')  # binding this url to default() function #decorator
def default():
    return 'Routing Algorithms <br><a href="127.0.0.1:4200/Dijkstras">Dijkstras Algorithm</a>'


@app.route('/Dijkstras1')
def webInterface():

    result = main.result("in.in")
    input_graph = result[-1]
    result = result[:-1]

    # using jinja2 to render Dijkstars.html template at this url
    return render_template('Dijkstras.html', result=result, input_graph=input_graph)


@app.route('/Dijkstras2')
def webInterface1():
    result = main.result("in1.in")
    input_graph = result[-1]
    result = result[:-1]

    # using jinja2 to render Dijkstars.html template at this url
    return render_template('Dijkstras.html', result=result, input_graph=input_graph)


if __name__ == "__main__":

    app.run("127.0.0.1", "4200", debug=True)
