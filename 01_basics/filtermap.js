// const code=["py","js","java"]
// const value = code.forEach((item)=>{//we store in value variable
//     console.log(item);
//     return item//foreach doesnot return the value
// })
// console.log(value);//undefined


// const mynums=[1.2,3,4,5,6,7]
// const newnums = mynums.filter((num)=>num>5)//filter returns the value //it is implicit so it will return the value
// console.log(newnums);//filter ke andar callback function milega and values ko eacha access kia jata hai

//explicit filter using return keyword
const mynums = [1,2,3,4,5,6,7,8,9]
// const newnums= mynums.filter((num)=>{
//     return num<6 //it is explicit (scope)we defined in the scope thats why must use return keyword

// })
// console.log(newnums);


//if we want to do using foreach loop we have to make first empty array
// const newnums = []
// mynums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);


//how to fetch the data from the arrays:
// const books=[
//     {
//         title:'b1', genre:'history'
//     },
//     {
//         title:'b2', genre:'politics'
//     },
//     {
//         title:'b1', genre:'history'
//     },
//     {
//         title:'b1', genre:'fiction'
//     },
//     {
//         title:'b1', genre:'nonfiction'
//     },
//     {
//         title:'b1', genre:'history'
//     }
// ]
// const newnooks= books.filter((bk)=> bk.genre ==='history')
// console.log(newnooks);


// const mynum = [1,2,3,4,5,6,7,8,9]
// const newnum = mynum.map((num)=> num+10)
// console.log(newnum);


//chaining= using 2-3methods at a time
// const mynum = [1,2,3,4,5,6,7,8,9]
// const newnum = mynum.map((num)=> num *10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(newnum);




//=============reduce function======================================
//reduce() method executesa user-supplied "Reducer" callback function on each element of the array, in orde,passing in return value from clculation on preceding element
const mynum = [1,2,3]
// const initialvalue= 0;
const newvalue= mynum.reduce(function(acc, curval){
    console.log(`acc val ${acc} and current value ${curval}`);
    
    return acc + curval
}, 0)//initial value =0
console.log(newvalue);

//shorthand without using{} or return keyword
// const mynumber = [1,2,3,4,5]
// // const initialvalue= 0;
// const newvalues= mynum.reduce((acc, curval)=> acc+curval, 0)//initial value =0
// console.log(newvalues);


//ex = shoping cart
const shopingcart = [
    {
        name:"dress",
        price:199
    },
    {
        name:"jeans",
        price:299
    },
    {
        name:"shirt",
        price:300
    },
    {
        name:"kurta",
        price:1299
    }
]
const pricetopay = shopingcart.reduce((acc, curval)=> acc+ curval.price, 0)
console.log(pricetopay);
