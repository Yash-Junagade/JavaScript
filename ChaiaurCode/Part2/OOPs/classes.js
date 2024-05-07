// class User{
//     constructor(name, email, password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     passwordEncrypt(){
//         return `000${this.password}abc`
//     }
// }

// const user1 = new User("Yash", "yash.junagade@gmail.com", "Yash@1234");

// console.log(user1.passwordEncrypt());


function User(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.passwordEncrypt = function (){
    return `000${this.password}abc`;
}

const user1 = new User("Yash", "yash.junagade@gmail.com", "Yash@1234");
console.log(user1.passwordEncrypt());