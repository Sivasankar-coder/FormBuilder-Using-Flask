//
//document.getElementById('p1').innerHTML = localStorage.getItem(html);
//
//
//$(document).ready(function(){
//  $("#hide").click(function(){
//    $('#content').hide();
//    $('#TextBoxContainer').appendTo('body');
//  });
//
//});
//
//$(document).ready(function() {
//            $('#submit').click(function() {
//                var insert = [];
//                $('.get_value').each(function() {
//                    if ($(this).is(":checked")) {
//                        insert.push($(this).val());
//                    }
//                });
//                insert = insert.toString();
//                var insert_string = 'checkboxvalue='+insert;
//                $.ajax({
//                    method: "POST",
//                    url: "/form",
//                    data: insert_string,
//                    cache: false,
//                    success: function(data){
//                        $("#result").html(data);
//                    }
//                });
//            });
//        });
//
//
//        .bg-dark
//{
//background-color:#343a40!important;
//padding: 10px;
//}
//.text-white{color:#fff!important}
//.card-body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}
//
//.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce)
//.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="{{url_for('static', filename='script.js')}}"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css">


    <style>


.content {
  max-width: 1100px;
  margin: auto;
  background: white;

}


.h-100 {
    height: 100%!important;
}




.list-group-item {
    width: 100%;
    margin: 5px 0!important;
    border-width: 1px!important;
    border-radius: .25rem!important;
}

.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background:#99ccff;
    border: 1px solid rgba(0,0,0,.125);
}
.align-items-center {
    -webkit-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
}

.d-flex {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
}

*, ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}





.border-secondary {
    border-color: #696359!important;
    border-top-color: rgb(105, 99, 89) !important;
    border-right-color: rgb(105, 99, 89) !important;
    border-bottom-color: rgb(105, 99, 89) !important;
    border-left-color: rgb(105, 99, 89) !important;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;


}

/* Create two unequal columns that floats next to each other */
.column {
  float: right;
  padding: 10px;
  height: auto; /* Should be removed. Only for demonstration */

}

.left {
  width: 25%;
}

.right {
  width: 75%;
}
.p {
  font-family: "Lucida Console", "Courier New", monospace;
}
.p2 {
  font-family: Arial, Helvetica, sans-serif;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
#fg-form-wrapper, #fg-form-wrapper form {
    width: 100%;
    min-height: 440px;
}
.color{
background:#99ccff;
}

.bg-dark
{
background-color:#343a40!important;
padding: 10px;
}
.text-white{color:#fff!important}
.card-body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}
.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}
.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#218838;border-color:#1e7e34;box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}
.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}

.form-style-5{


	background: #f4f7f8;
	margin: 10px auto;

	background: #f4f7f8;
	border-radius: 8px;
	font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-5 fieldset{
	border: none;
}
.form-style-5 legend {
	font-size: 1.4em;
	margin-bottom: 10px;
}

.form-style-5 input[type="text"],
.form-style-5 input[type="date"],
.form-style-5 input[type="datetime"],
.form-style-5 input[type="email"],
.form-style-5 input[type="tel"],
.form-style-5 input[type="number"],
.form-style-5 input[type="search"],
.form-style-5 input[type="time"],
.form-style-5 input[type="url"],
.form-style-5 textarea,
.form-style-5 select {
	font-family: Georgia, "Times New Roman", Times, serif;
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	width: 100%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	background-color: #e8eeef;
	color:#8a97a0;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;

}
.form-style-5 input[type="text"]:focus,
.form-style-5 input[type="date"]:focus,
.form-style-5 input[type="datetime"]:focus,
.form-style-5 input[type="email"]:focus,
.form-style-5 input[type="number"]:focus,
.form-style-5 input[type="search"]:focus,
.form-style-5 input[type="time"]:focus,
.form-style-5 input[type="url"]:focus,
.form-style-5 textarea:focus,
.form-style-5 select:focus{
	background: #d2d9dd;
}
.form-style-5 select{
	-webkit-appearance: menulist-button;
	height:50px;
}
.form-style-5 .number {
	background: #1abc9c;
	color: #fff;
	height: 30px;
	width: 30px;
	display: inline-block;
	font-size: 0.8em;
	margin-right: 4px;
	line-height: 30px;
	text-align: center;
	text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	border-radius: 15px 15px 15px 0px;
}









    </style>
</head>
<body bgcolor="#4285F4">
<form name="form1" action="/form" method="post">

    <div class="content" id="content">


        <div class="column left" id="left">

            <aside id="ui-left-column" class="col-md-3 mb-3">
                <div class="card border-secondary h-100">
                    <div class="card-header">
                    <div class="bg-dark text-white">
                        <center><div class="p">Components</div></center>
                    </div>
                </div>


                    <div>

                        <center>
                            <li class="list-group-item "
                                data-component="textarea">
                                <i class="far fa-user"></i>&nbsp;<span class="text-gray p2">Textarea</span><br>
                                <input id="Text" type="button" class="btn btn-success" name="textarea" value="Add" onclick="AddTextBox()"/>&nbsp;
                                <input type="button" value="Remove" class="btn btn-danger" onclick="myFunction()"/>

                            </li>
                        </center>
                        <center>
                            <li class="list-group-item"
                                data-component="select">
                                <i class="fas fa-mobile-alt"></i>&nbsp;<span class="text-gray p2">Phone Number</span><br>
                                <input id="Tel" type="button" class="btn btn-success" name="pn" value="Add" onclick="TelBox()"/>&nbsp;
                                <input type="button" class="btn btn-danger" value="Remove" onclick="remtel()"/>
                            </li>
                        </center>

                        <center>
                            <li class="list-group-item"
                                data-component="select">
                                <i class="far fa-envelope"></i>&nbsp;<span class="text-gray p2">Email</span><br>
                                <input id="Mail" type="button" class="btn btn-success" name="mail" value="Add" onclick="MailBox()"/>&nbsp;
                                <input type="button" class="btn btn-danger" value="Remove" onclick="rememail()"/>
                            </li>
                        </center>

                        <center>
                            <li class="list-group-item"
                                data-component="select">
                                <i class="far fa-dot-circle"></i>&nbsp;<span class="text-gray p2">Radio</span><br>
                                <input id="Radio" type="button" class="btn btn-success" value="Add" onclick="radioBox()"/>&nbsp;
                                <input type="button" class="btn btn-danger" value="Remove" onclick="remrad()"/>
                            </li>
                        </center>

                        <center>
                            <li class="list-group-item"
                                data-component="checkbox">
                                <i class="far fa-check-square"></i>&nbsp;<span class="text-gray p2">Checkbox</span><br>
                                <input type="button" id="check" class="btn btn-success" value="Add" onclick="checkBox()"/>&nbsp;
                                <input type="button" class="btn btn-danger" value="Remove" onclick="remchk()"/>
                            </li>
                        </center>
                        <center>
                            <li class="list-group-item"
                                data-component="select">
                                <i class="far fa-caret-square-down"></i>&nbsp;<span class="text-gray p2">Select Box</span><br>
                                <input type="button" class="btn btn-success" id="Add3" value="Add" onclick="selectBox()"/>&nbsp;
                                <input type="button" class="btn btn-danger" value="Remove" onclick="remsel()"/>
                            </li>
                        </center>
                        <center>
                            <li class="list-group-item"
                                data-component="select">
                                <i class="far fa-file-alt"></i>&nbsp;<span class="text-gray p2">Textfield</span><br>
                                <input type="button" id="textfield" class="btn btn-success" value="Add" onclick="TextareaBox()"/>&nbsp;
                                <input type="button" class="btn btn-danger" value="Remove" onclick="remtexf()"/>
                            </li>
                        </center>

                    </div>
                </div>
            </aside>

        </div>


        <div class="column right" id="right">

            <div class="card border-secondary h-100">
                <div class="card-header">
                    <div class="card bg-dark text-white">
                        <center><div class="p">Form</div></center>
                    </div>
                </div>
                <div class="card-body px-1 color">
                    <div id="fg-form-wrapper">
                        <div id="field_div">
                            <form name="submit" id="form2" action="/form" method="post">
                                <center>
                                    <div id="TextBoxContainer" class="form-style-5">



                                        <!--Textboxes will be added here -->

                                    </div>
                                </center>

                            </form>



                        </div>


                    </div>
                </div>

            </div>
            <br><center><input type="button" class="btn btn-danger" id="hide" value="Create Form" onclick="createButton()"></center>

        </div>

    </div>
    <script>


$(document).ready(function(){
  $("#hide").click(function(){
    $('#content').hide();
    $('#btnAdd').hide();

    $('#field_div').appendTo('body');
  });
});

function Add(){


        btnAdd.onclick = (e) => {
        const btnAdd = document.querySelector('#btnAdd');

        const sb = document.querySelector('#list');
        const name = document.querySelector('#name');


            // validate the option
            if (name.value == '') {
                alert('Please enter the name.');
                return;
            }
            // create a new option
            const option = new Option(name.value, name.value);
            // add it to the list
            sb.add(option, undefined);

            // reset the value of the input
            name.value = '';
            name.focus();
        };


}


function GetDynamicTextBox(value){
            return '<input name = "uname" id = "uname" placeholder="Your Name *" type="text" value = "' + value + '" /><br>'

        }


function GetTelBox(value){
            return '<input type="tel" id="phone" placeholder="Your Mobile Number *" name="phone"><br>'

        }
function GetMailBox(value){
            return '<input type="email" id="email" placeholder="Your Email *" name="email"><br>'

        }

function GetselectBox(value){
            return '<div id="container"><label for="name"></label><input type="text" id="name" placeholder="Enter a framework" autocomplete="off"><input type="button" id = "btnAdd" value = "Add" class="btn btn-success" onclick = "Add()" /><label for="list"></label><select id="list" name="list" multiple></select></div>'


        }

function GetcheckBox(value){
            return '<input type="text" id="checkbox" name="check"><input type="button" id = "Add1" value = "Add" onclick = "Addcheckbox()" /><br>'



        }

function getradioBox(value){
            return '<div id="radiobut"><p>Please select your gender:</p>&nbsp;<input type="radio" id="male" name="gender" value="male"><label for="male">Male</label>&nbsp;<input type="radio" id="female" name="gender" value="female"><label for="female">Female</label>&nbsp;<input type="radio" id="other" name="gender" value="other"><label for="other">Other</label></div>'


        }

function GettextareaBox(value){
            return '<textarea id="textf" name="textf" placeholder="Enter Your Notes *" rows = "5" cols = "50" name = "description"></textarea>'


        }

function AddTextBox() {
            var div1 = document.createElement('BR');
            var div = document.createElement('DIV');
            div.innerHTML = GetDynamicTextBox("");

            document.getElementById("TextBoxContainer").appendChild(div);
            document.getElementById("TextBoxContainer").appendChild(div1);
        }

function RemoveTextBox(div) {
            document.getElementById("TextBoxContainer").removeChild("text1");
        }



function TelBox() {
            var div1 = document.createElement('BR');
            var div = document.createElement('DIV');
            div.innerHTML = GetTelBox("");
            document.getElementById("TextBoxContainer").appendChild(div);
            document.getElementById("TextBoxContainer").appendChild(div1);
        }

function MailBox() {
            var div1 = document.createElement('BR');
            var div = document.createElement('DIV');
            div.innerHTML = GetMailBox("");
            document.getElementById("TextBoxContainer").appendChild(div);
            document.getElementById("TextBoxContainer").appendChild(div1);
        }

function radioBox() {
            var div1 = document.createElement('BR');
            var div = document.createElement('DIV');
            div.innerHTML = getradioBox("");
            document.getElementById("TextBoxContainer").appendChild(div);
            document.getElementById("TextBoxContainer").appendChild(div1);
        }


function selectBox() {
            var div1 = document.createElement('BR');
            var div = document.createElement('DIV');
            div.innerHTML = GetselectBox("");

            document.getElementById("TextBoxContainer").appendChild(div);
            document.getElementById("TextBoxContainer").appendChild(div1);
        }

function TextareaBox() {
            var div1 = document.createElement('BR');
            var div = document.createElement('DIV');
            div.innerHTML = GettextareaBox("");

            document.getElementById("TextBoxContainer").appendChild(div);
            document.getElementById("TextBoxContainer").appendChild(div1);
        }

function checkBox() {
            var div1 = document.createElement('BR');
            var div = document.createElement('DIV');
            div.innerHTML = GetcheckBox("");

            document.getElementById("TextBoxContainer").appendChild(div);
            document.getElementById("TextBoxContainer").appendChild(div1);
        }

function Addcheckbox() {

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.setAttribute("name", "checkboxvalue");
    var label = document.createElement('label');
    label.innerHTML = document.getElementById("checkbox").value;
    checkbox.setAttribute("label", label);
    var container = document.getElementById("TextBoxContainer");
    container.appendChild(checkbox);
    container.appendChild(label);
    }

  function myFunction() {
  var myobj = document.getElementById("uname");
  myobj.remove();
}

  function remtel() {
  var myobj = document.getElementById("phone");
  myobj.remove();
}

  function rememail() {
  var myobj = document.getElementById("email");
  myobj.remove();
}

  function remsel() {
  var myobj = document.getElementById("container");
  myobj.remove();
}

  function remchk() {
  var myobj = document.getElementById("checkbox");
  var myobj1 = document.getElementById("Add1");
  myobj.remove();
  myobj1.remove();
}

 function remrad() {
  var myobj = document.getElementById("radiobut");
  myobj.remove();

}

  function remtexf() {
  var myobj = document.getElementById("textf");
  myobj.remove();
}

function createButton() {
    var button = document.createElement("input");
    button.type = "submit";
    button.value = "Submit";
    button.id = "submit";
    document.getElementById("form2").appendChild(button);

}

$(document).ready(function() {
            $('#submit').click(function() {
                var insert = [];
                $('.get_value').each(function() {
                    if ($(this).is(":checked")) {
                        insert.push($(this).val());
                    }
                });
                insert = insert.toString();
                var insert_string = 'checkboxvalue='+insert;
                $.ajax({
                    method: "POST",
                    url: "/form",
                    data: insert_string,
                    cache: false,
                    success: function(data){
                        $("#result").html(data);
                    }
                });
            });
        });


$(document).ready(function(){
  $("#Add1").click(function(){
     var $ctrl =  $(document.createElement("input")).attr({
                     id:    'topicFilter-'
                    ,name:  'test'
                    ,value: 'test'
                    ,text :'my testing'
                    ,type:  'checkbox'
                    ,checked:true
            })
     $("#renderedControl").append($ctrl.after(document.getElementById("checkbox")));
  });

});






    </script>
</form>
</body>
</html>
