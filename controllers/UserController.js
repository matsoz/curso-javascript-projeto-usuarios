class UserController {
    
    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId); //Tabela que recebe a linha nova

        this.onSubmit(); //Prepara o botão
    }

    onSubmit() {

        /*
         * Se utilizar 'getElementById', a tag '#' é dispensada.
         * Se utilizar 'querySelector', a tag '#' é necessária.
         * 
         * A arrow function permite que o 'this' seja referente ao escopo exterior
         */
        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            let btn = this.formEl.querySelector("[type = submit]");

            btn.disabled = true;

            let values = this.getValues();
 
            this.getPhoto().then(
                (content) => {
                    values.photo = content;
                    this.addLine(values);
                    this.formEl.reset();
                    btn.disabled = false;
                },
                (e) => {
                    console.error(e);
                }
            );
        });
    }

    getPhoto() {

        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();

            let elements = [...this.formEl.elements].filter(item => {
                if (item.name === 'photo') return item;

            });

            let file = elements[0].files[0];

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = () => {
                reject(e);
            };

            if (file) {
                fileReader.readAsDataURL(file);
            }
            else {
                resolve('dist/img/boxed-bg.jpg');
            }

        });
    }

    getValues() {

        let user = {};

        // Generate a JSON with the form data
        [...this.formEl.elements].forEach(function (field, index) {
            if (field.name == "gender") {
                if (field.checked) {
                    user.gender = field.value;
                    console.log(field.value);
                }
            }
            else if (field.name == "admin") {
                user[field.name] = field.checked;
            }
            else {
                user[field.name] = field.value;
                console.log(field.name);
            }
        });

        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin);
    }

    addLine(dataUser) {
        console.log("addLine" + dataUser);

        let tr = document.createElement('tr');

        /*
        * O uso da crase ``caracteriza a Template String TS,
        * onde é possível quebrar linhas no comando HTML embutido.
        *
        * A tag ${xxx} configura um trecho de código em meio à Template String TS
        */
        tr.innerHTML = `<td>
                          <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
                        </td>
                        <td>${dataUser.name}</td>
                        <td>${dataUser.email}</td>
                        <td>${(dataUser.admin == true) ? 'Sim' : 'Nao' }</td>
                        <td>${Utils.dateFormat(dataUser.register)}</td>
                        <td>
                          <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                          <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                        </td>`;

        this.tableEl.appendChild(tr);
 
    }

}