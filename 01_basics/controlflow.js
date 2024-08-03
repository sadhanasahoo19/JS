//example1
if(2===4){
    console.log("equal");
}else{
    console.log("not equal");
    
}
//example2
const temp= 41
if(temp<50){
    console.log("smaller");
    
}else{
    console.log("greater");
    
}
//ex-3
const score = 200
if(score > 100){
    const power="fly" //if we use const & var it will accessible outside the scope, but using var it will be easily accessible
    console.log(`power: ${power}`);//will run easily
    
}
// console.log(`power: ${power}`); //not run here as power is define in scope

const balance =1000
if(balance>500) console.log("test");

//multiple condition
if(balance<500){
    console.log("less than 500");
    
}else if(balance<750){
    console.log("less than 750");
    
}else if(balance<900){
    console.log("less than 900");
    
}
else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitcard = true
const userLogFromGoogle = false
const userLogFromEmail = true
if(userLoggedIn && debitcard && 2==4){
    console.log("allowed them to buy");
}else{
    console.log("not allowed uh to buy");
}
if(userLogFromEmail || userLogFromGoogle){
    console.log("yes login");
    
}
