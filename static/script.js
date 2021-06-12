function GetDynamicTextBox(value){
            return '<input name = "uname" id = "uname" type="text" value = "' + value + '" />&nbsp;' +
                    '<input type="button" id="text" value="Remove" onclick = "RemoveTextBox(this)" />'
        }


function GetTelBox(value){
            return '<input type="tel" id="phone" name="phone"><br><br>' +
                    '<input type="button" id="tel" value="Remove" onclick = "RemoveTextBox(this)" />'
        }
function GetMailBox(value){
            return '<input type="email" id="email" name="email">' +
                    '<input type="button" id="email" value="Remove" onclick = "RemoveTextBox(this)" />'
        }

function GetselectBox(value){
            return '<select id = "ddlFruits"></select><hr />Text: <input type="text" id = "txtText" /><input type="button" id = "Add" value = "Add" onclick = "Add()" />' +
                    '<input type="button" id="select" value="Remove" onclick = "RemoveTextBox(this)" />'

        }

function GetcheckBox(value){
            return '<input type="text" id="checkbox" name="checkc"><input type="button" id = "Add1" value = "Add" onclick = "Addcheckbox()" />' +
                    '<input type="button" id="check" value="Remove" onclick = "RemoveTextBox(this)" />' ;


        }

function getradioBox(value){
            return '<p>Please select your gender:</p><input type="radio" id="male" name="gender" value="male"><label for="male">Male</label><br><input type="radio" id="female" name="gender" value="female"><label for="female">Female</label><br><input type="radio" id="other" name="gender" value="other"><label for="other">Other</label>' +
                    '<input type="button" id="radio" value="Remove" onclick = "RemoveTextBox(this)" />'

        }

function GettextareaBox(value){
            return '<textarea rows = "5" cols = "50" name = "description">Enter your name</textarea>' +
                    '<input type="button" id="textarea" value="Remove" onclick = "RemoveTextBox(this)" />'

        }

function AddTextBox() {
            var div = document.createElement('DIV');
            div.innerHTML = GetDynamicTextBox("");
            document.getElementById("TextBoxContainer").appendChild(div);
        }

function RemoveTextBox(div) {
            document.getElementById("TextBoxContainer").removeChild(div.parentNode);
        }



function TelBox() {
            var div = document.createElement('DIV');
            div.innerHTML = GetTelBox("");
            document.getElementById("TextBoxContainer").appendChild(div);
        }

function MailBox() {
            var div = document.createElement('DIV');
            div.innerHTML = GetMailBox("");
            document.getElementById("TextBoxContainer").appendChild(div);
        }

function radioBox() {
            var div = document.createElement('DIV');
            div.innerHTML = getradioBox("");
            document.getElementById("TextBoxContainer").appendChild(div);
        }


function selectBox() {
            var div = document.createElement('DIV');
            div.innerHTML = GetselectBox("");

            document.getElementById("TextBoxContainer").appendChild(div);
        }

function TextareaBox() {
            var div = document.createElement('DIV');
            div.innerHTML = GettextareaBox("");

            document.getElementById("TextBoxContainer").appendChild(div);
        }

function checkBox() {
            var div = document.createElement('DIV');
            div.innerHTML = GetcheckBox("");

            document.getElementById("TextBoxContainer").appendChild(div);
        }

function Add() {
            var ddl = document.getElementById("ddlFruits");
            var option = document.createElement("OPTION");
            option.innerHTML = document.getElementById("txtText").value;
            ddl.options.add(option);
        }

function Addcheckbox() {

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var label = document.createElement('label');
    label.innerHTML = document.getElementById("checkbox").value;
    var container = document.getElementById("TextBoxContainer");
    container.appendChild(checkbox);
    container.appendChild(label);
    }





