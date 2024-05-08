class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Yash`
    }

    set password(value){
        this._password = value
    }
}

const IronMan = new User("ironMan@tonystark.ai", "abc")
console.log(IronMan.email);