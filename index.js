var name = document.querySelector("#exampleInputName");

var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");

var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#nameAdmin");

var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function (field, index) {

    console.log(field.name);

});