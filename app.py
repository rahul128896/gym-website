from flask import Flask, request, jsonify,render_template
from flask_mysqldb import MySQL
import os

app = Flask(__name__)

# Configure MySQL connection
app.config['MYSQL_HOST'] = 'localhost'  
app.config['MYSQL_USER'] = 'root' 
app.config['MYSQL_PASSWORD'] = 'Singh@123' 
app.config['MYSQL_DB'] = 'fitness_centre'  

mysql = MySQL(app)


# Route to render the HTML page (index.html)
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


# Route to handle contact form submission
@app.route('/', methods=['POST'])
def submit_contact():
    try:
        # Get data from the request (name and number)
        name = request.json.get('name')
        number = request.json.get('number')

        if not name or not number:
            return jsonify({"message": "Name and number are required!"}), 400

       
        cur = mysql.connection.cursor()

        # Insert data into the contacts table
        cur.execute("INSERT INTO contacts (name, number) VALUES (%s, %s)", (name, number))

        # Commit the transaction
        mysql.connection.commit()

        # Close the cursor
        cur.close()

        return jsonify({"message": "Contact submitted successfully!"}), 200
    except Exception as e:
        return jsonify({"message": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
