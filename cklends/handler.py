from flask import request
from flask import jsonify, request

data = request.get_json()
username = data.get('username')
email = data.get('email')
password = data.get('password')

