from flask import Flask,render_template,flash, redirect,url_for,session,logging,request
import os
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/Siva/Desktop/flask/fbuilder.db'
db = SQLAlchemy(app)
picFolder = os.path.join('static', 'pics')
print(picFolder)
app.config['UPLOAD_FOLDER'] = picFolder


class user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    phone = db.Column(db.String(120))
    email = db.Column(db.String(80))
    gender = db.Column(db.String(10))
    chk = db.Column(db.String(20))
    slt = db.Column(db.String(30))
    textfield = db.Column(db.String(500))

@app.route("/")
def index():
    pic1 = os.path.join(app.config['UPLOAD_FOLDER'], 'bg.jpg','build.png','respose.png')
    return render_template("index.html", user_image=pic1)

@app.route("/formbuilder")
def home():
    return render_template("home.html")


@app.route("/form",methods=['POST','GET'])
def register():
    if request.method == 'POST':
        uname = request.form['uname']
        phone = request.form['phone']
        email = request.form['email']
        gender = request.form["gender"]

        chk = request.form.getlist('products')
            # initialize an empty string
        str1 = ""

            # traverse in the string
        for ele in chk:
            str1 = str1 + " "+ ele

                # return string


        slt = request.form["list"]
        textfield = request.form["textf"]
        register = user(username = uname, phone = phone, email = email,gender=gender,chk=str1,slt=slt,textfield=textfield)
        db.session.add(register)
        db.session.commit()


    return render_template("success.html")


@app.route('/confirm')
def list():
    return render_template('confirm.html', user = user.query.all() )

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)