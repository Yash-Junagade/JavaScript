// let myName = "yash     "
// let mychannel = "tws     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.yash = function(){
    console.log(`yash is present in all objects`);
}

Array.prototype.heyyash = function(){
    console.log(`yash says hello`);
}

// heroPower.yash()
// myHeros.yash()
// myHeros.heyyash()
// heroPower.heyyash()

// inheritance

const User = {
    name: "tws",
    email: "tws@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "twsAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"yash".trueLength()
"iceTea".trueLength()