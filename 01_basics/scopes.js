let a=10
const b= 20
var c=30
//{}=scope- whenever it is with function and loops is called scope
console.log(a);
console.log(b);
console.log(c);

// if(true){
//     let d=10 //throw error becuase it is within the if else loop scope
//     const e= 20//throw error becuase it is within the if else loop scope
//     var f=30//will not throw any error and thats reason why we dont use this much in programming language
// }
// console.log(f);

var g = 300//outside the loop called global scope
if(true){//inside the if loop called block/local scope
    let h= 20
    const i=30
    var g= 3
}
// console.log(g);


let j=10
if(true){
    let j=30
    const k =30
    // console.log("inner:",j);
}
// console.log(j);


//nested scope
function one(){
    const username= "chinu"
    function two(){
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);//this throw error as it is called outside the block scopeof two function
    //child function can access parent function easily but not vice versa
    two()//will work kyuki two function ke under global function ke variable ko declare kia he humne
}
one()

if(true){
    const username = "om"
    if(username === "om"){
        const website=" twiter"
        // console.log(username+website);
    }
    // console.log(website);//error
}
// console.log(username);//error



//+++++++++interesting+++++++++

console.log(add1(5))//here is just a declaration
function add1(num){
    return num+1
}
// add1(5)//not throw any output

add2(5)//hoisting=function kese declare hote hai, kaha rkhha jata he, what are execution contxt,how final trees are made how var, fun are put in those trees
const add2=function(num){//here with declaration we have hold a value of num function with variable
    return num+2
}
