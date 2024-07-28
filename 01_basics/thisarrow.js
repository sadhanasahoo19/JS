const user={
    name:"chinu",
    price:199,

    welcomeMsg: function(){
        console.log(`${this.name} wlcome to website`);
        // console.log(this);
    }

}
user.welcomeMsg() //this will return current value of name = chinu
//what if we change the value, and check whether it will access the current value or not
user.name="prashant"
user.welcomeMsg()
console.log(this);//empty will be result

function chai(){
    let name="chinu"
    console.log(this.name);//this function will work on objects not with funtion
}
chai()


//arrow function
const tea = () =>{
    let username="om"
    console.log(this);//return {}
    console.log(this.username);//return undefined
}
tea()//return {}
//arrow function - ()=>{}
const addtwo= (num1,num2)=>{
    return  num1+num2
}
console.log(addtwo(2,3))


//implicit return= no need to use return keyword in implicit 
const addn=(no1,no2)=> no1+no2
console.log(addn(2,5));

const addno=(no1,no2)=> (no1+no2)//no need to write return but in{} must have to write return keyword
console.log(addn(2,5));

//explicite return= must have to use return keyword
const addnum=(no1,no2)=> ({usern:"hitesh"})
console.log(addn(2,5));

//immediately invoked function expression(IIFe): ()=function definition,()= execution
(function chaitea(){//named IIFE
    console.log(`db`);//global scope ke polution se problem hoti he kai baar toh us global scope ke variables ke pollution ko hatane keliye IIFE ka use krtey he
})();//to end first func use ;

//we can also wirte iife in arrow 
((name)=>{//unnamed IIFE
    console.log(`db connected to ${name}`);
})("prashant")
