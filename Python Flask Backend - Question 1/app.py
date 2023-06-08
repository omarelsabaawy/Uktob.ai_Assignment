from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/sum', methods=['POST'])
def sum_numbers():
    try:
        data = request.get_json()
        numbers = data['numbers']
        if not isinstance(numbers, list):
            raise ValueError('Invalid input: numbers should be a list')

        result = sum(numbers)
        return jsonify({'sum': result})
    except (KeyError, ValueError) as e:
        return jsonify({'error': str(e)}), 400


@app.route('/concatenate', methods=['POST'])
def concatenate_strings():
    try:
        data = request.get_json()
        string1 = data['string1']
        string2 = data['string2']
        if not isinstance(string1, str) or not isinstance(string2, str):
            raise ValueError('Invalid input: strings should be of type str')

        result = string1 + " " + string2
        return jsonify({'concatenated_string': result})
    except (KeyError, ValueError) as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
