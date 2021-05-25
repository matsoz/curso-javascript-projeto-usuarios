class User {

    constructor(name, gender, birth, country, email, password, photo, admin) {

        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get gender() {
        return this._name;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get birth() {
        return this._birth;
    }

    set birth(birth) {
        this._birth = birth;
    }

    get country() {
        return this._country;
    }

    set country(country) {
        this._country = country;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    get photo() {
        return this._photo;
    }

    set photo(photo) {
        this._photo = photo;
    }

    get admin() {
        return this._admin;
    }

    set admin(admin) {
        this._admin = admin;
    }

    get register() {
        return this._register;
    }

    loadFromJSON(json){

        for(let name in json){

            switch(name){
               
                case '_register':
                    this[name] = new Date(json[name]);
                    break;

                default:
                    this[name] = json[name];
            }
            
        }

    }
}