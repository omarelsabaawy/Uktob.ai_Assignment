from flask import Flask, request, jsonify

app = Flask(__name__)

# Placeholder dictionary for storing user data
users = {}

@app.route("/", methods=['GET'])
def func():
    return 'Hello World'

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        if not username or not password:
            raise ValueError('Invalid input: username and password are required')
        
        if username in users:
            raise ValueError('Username already exists')
        
        users[username] = password
        return jsonify({'message': 'Registration successful'})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        if not username or not password:
            raise ValueError('Invalid input: username and password are required')
        
        if username in users and users[username] == password:
            return jsonify({'message': 'Access granted'})
        else:
            return jsonify({'message': 'Access denied'})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
