//datatype has 2 types - a)primitive , b)non-primitive
//primitive datatypes are call by value which means that whenever we copy then the original data reference of that is not allocate to user,just copy is provided, and inshort the changes are only done in copy and not in original reference
//primitive dt has 7 types= string, number, boolean, null, undedined, symbol, bigInt
const score = 100
const scoreVal = 100.3

const logIn = false
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 2312847245674487n

//nonprimitive dt aret= call by reference which means it directly allocate the reference of original data to us
//it has 3 types = arrays, objects, function

// const heroes= ["shaktiman","doga"];//arrays

// let myObj{//objects
//     name: "chinu",
//     age:  22,
// }

const myFunction = function(){ //functions
    console.log("hellow");
}

//how to find the type of the datatype here we use the "typeof"
console.log(typeof bigNumber);
console.log(typeof temp);
console.log(typeof myFunction);

//******************************************************************************** */
//stack(primitive= whatever variable we created, we get the copy), heap memeory(nonprimitive type= wheneever the memory go into the heap we get the reference)
let myYouTube= "chinu"
let anotherName=myYouTube
anotherName="chaiaurbiscuit"
console.log(myYouTube);
console.log(anotherName);

//arrays - nonprimitive
let userOne={
    name:"chinti",
    upi:"userhdfdi"
}
let userTwo= userOne
userTwo.name="minti"
console.log(userOne.name);
console.log(userTwo.name);
