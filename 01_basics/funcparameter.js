function sayName(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("o");
}
sayName() //using ()=execution, without()=reference

// function addNum(num1, num2){//parameters
//     console.log((num1+num2));
// }
// const result = addNum(2,3)//when calling the function we called as arguements, passing the arguement in()
// console.log(result);//this will not return result properly it will show undefined


function sumNum(n1,n2){
    // let result = n1+n2
    // console.log("hello");//before using console of return it will return value, but if we use console after return it will not return value
    // return result

    return n1+n2 //without declaring any varialbe we can use return directly
}

const result = sumNum(2,3)
// console.log("result is:", result);



// function loginmsg(username){
//     if(username === undefined){
//         console.log("please enter username:");
//         return
//     }
//     return `${username} just loggedin` //``=string interpolation
// }
// console.log(loginmsg("chinu"));
// console.log(loginmsg());//if we dont pass value it will show undefined 

function loginmsg(username="sadhana"){//by default
    if(username === undefined){
        console.log("please enter username:");
        return
    }
    return `${username} just loggedin` //``=string interpolation
}
console.log(loginmsg("chinu"));
console.log(loginmsg("pawar"));