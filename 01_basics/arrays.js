//arrays
const arr=[0,1,2,3,4]
const heros = ["hello","chinu"]
const arr2 = new Array(1,2,3,4,5)
console.log(arr[1]);

//arrays method
arr.push(6)//push method
arr.push(7)
arr.push(8)
arr.pop()//pop method=this will remove the last element

arr.unshift(9)//unshift method = this will add new value at the start and will shift all other elements
arr.shift()//shift method = we dont give any parameter here
console.log(arr.includes(9));//this method will tell us whether the element is present or not
console.log(arr.indexOf(4));

const myarr = arr.join()
console.log(myarr);


//slice method, splice method
//a. slice method= this will not  manipulate the orriginal array
console.log("A", arr);
const myn1= arr.slice(1,3)
console.log(myn1);
console.log("B", arr);


//splice mthod=this manipulate to the original array
const myn2= arr.splice(1,3)
console.log("C", arr);
console.log(myn2);
