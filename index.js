var user = {};
var fields = document.querySelectorAll("#form-user-create [name]");

function addLine(dataUser) {
    console.log("addLine" + dataUser);
    let tr = document.createElement("tr");

    /*
     * O uso da crase ``caracteriza a Template String TS,
     * onde é possível quebrar linhas no comando HTML embutido.
     * 
     * A tag ${xxx} configura um trecho de código em meio à Template String TS
     */
    tr.innerHTML = `<tr>
                    <td>
                      <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                    </td>
                    <td>${dataUser.name}</td>
                    <td>${dataUser.email}</td>
                    <td>${dataUser.admin}</td>
                    <td>${dataUser.birth}</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                    </td>
                  </tr>`;

    document.getElementById("table-users").appendChild(tr);

}

/*
 * Se utilizar 'getElementById', a tag '#' é dispensada.
 * Se utilizar 'querySelector', a tag '3' é necessária.
 */
document.getElementById("form-user-create").addEventListener("submit", function(event) {
    alert("Submetendo");
    event.preventDefault();

    // Generate a JSON with the form data
    fields.forEach(function (field, index) {
        if (field.name == "gender") {
            if (field.checked) {
                user.gender = field.value;
                console.log(field.value);
            }
        }
        else {
            user[field.name] = field.value;
            console.log(field.name);
        }
    });

    addLine(user); //Add the JSON user

    console.log(user); // Shows the JSON in the console

});

