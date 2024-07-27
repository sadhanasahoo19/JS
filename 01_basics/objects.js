//obejcts literals= stored in key-value pair

const sym = Symbol("keys1")//how to declared a symbol as a key

const jsUser={
    name:"chinu",
    age:18,
    [sym] : "keys1",
    location: "mumbai",
    email:"chinu@.com",
    isLoggedIn: false,
    
}
console.log(jsUser.email);
console.log(jsUser["email"]);//also access the objects in this way
console.log(jsUser[sym]);

jsUser.email = "spmailcom"
// Object.freeze(jsUser) //freeze: to lock the value so that no one change it again
console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello world");
}
jsUser.greetingsTwo = function(){
    console.log(`hello world ${this.name}`);//jab bhi hume same object ko reference krna hai then use "this"
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());