//syntx of switch case loop
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("RPRIL");
        break;

    default:
        console.log("error");
        
        break;
}

const monthname = "may"
switch (monthname) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "may":
        console.log("May");
        break;

    default:
        console.log("error");
        
        break;
}


//truthy falsy 
// //ex-1
// const useremail="jehfj"
// if(useremail){
//     console.log("got");
    
// }
// else{
//     console.log("not got");
    
// }

//ex-2=empty string
// const useremail=""
// if(useremail){
//     console.log("got");
    
// }
// else{
//     console.log("not got");
    
// }


//ex-3 if empty array or list is there then it is not good
const useremail=[]
if(useremail){
    console.log("got");
    
}
else{
    console.log("not got");
    
}
//false==0, false=='', 0==''>> answer is true
//truthy values:"0", 'false', " ",[],{}, function(){}
//falsy values: false, 0, -0, bigInt-0n, "", null, undefined, NaN

// if(useremail.length === 0){
//     console.log("array is empty");
// }

const empty = {}
if(Object.keys(empty).length === 0){
    console.log("Object is empty");
    
}


//nullish coalescing operator(??): null undefined
let val1;
// val1 = 5?? 10  //op: 5
// val1=null??10  //op:10
val1=undefined??20 //op:20
// val1=null??10??50 //op: 10

console.log(val1);

//terniary operator syntax
// condition ? true; false
const iceprice=100
iceprice>80?console.log("less than 80"):console.log("more ");

