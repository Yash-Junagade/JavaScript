/* 
1. Premetive Data stored in the stack.
2. Non Premetive Data store in the heap.
*/

// Premetive 

let name = "yash";
user = name;// value stored in the stack and give the copy of the original value
user = "tony"; 

// console.log(user);
// console.log(name);


// Non-Premetive
let user1 = {
    name : "yash",
    email : "yash@gmail.com",
    phNo : 8262879188
};

let user2 = user1; // it directly gives the refernce of the original object
// it does not copy the object

console.log(user1.name);
user1.name = "tony";
console.log(user2.name);