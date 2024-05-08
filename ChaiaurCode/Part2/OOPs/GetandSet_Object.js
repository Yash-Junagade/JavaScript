const User = {
    _email: 'tony@.com',
    _password: "tony",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tony = Object.create(User)
console.log(tony.email);