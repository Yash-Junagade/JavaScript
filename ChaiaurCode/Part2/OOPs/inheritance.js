class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const yash = new Teacher("yash", "yash@teacher.com", "123")

yash.logMe()
const Yash = new User("Yash")

Yash.logMe()

console.log(yash instanceof User);