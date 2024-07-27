
// const sum = new Object() //this is the singleton object
const sum ={}//non singleton object
sum.id = "abh12"
sum.name= "chinu"
sum.login = false

console.log(sum);

const regularName = {
    email:"abc.com",
    fullname:{
        username:{
            firstname:"chini",
            lastname:"sahoo"
        }
    }
}
console.log(regularName.fullname.username);//to access the objects inside the objects


//to combine the objeccts:
const obj1={1:"a" , 2:"b"}
const obj2 ={3:"c",4:"d"}
// const obj3 = {obj1 , obj2}//this is normal way 


const obj3 = Object.assign(obj1, obj2) //({} ,obj1, obj2)
//syntax: object.assign(target, source)
const obj4 = {...obj1, ...obj2}//we can also use spread operator to combine like arrays
console.log(obj4);
console.log(obj3);

//whenever the values comes from database it somewhat comes in array of objects
const users = [
    {
        id:1,
        email:"abc@.com"
    },
    {
        id:"xyz",
        email:"xyz.com"
    }
]
users[1].email
console.log(sum);
console.log(Object.keys(sum));//output will be array datatype-saare keys ko leke ek array me rkh dia now uspe loop laga skte he
console.log(Object.values(sum));
console.log(Object.entries(sum));//arays ke andar arrays  o/p will be in the key values pair
console.log(sum.hasOwnProperty('login'));//particular key is present or not

//======================destructuring and API
const course={
    coursename: "js in hindi",
    fees: "999",
    courseInstructor: "hitesh"
}
const{fees} = course //new way to get the key from objects
const {courseInstructor: instructor} = course //what if the key word is large now we can change  it and console log it
console.log(fees);
console.log(instructor);

//sometimes we get api in the form of objects(keys and valaue pair) andd arrays
//objects interpretation in api
// {
//     "name":"chinu",
//     "course":"js"
// }

//arrays
// [
//     {},
//     {}
// ]