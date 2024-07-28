function addcart(...n1){//rest operator: to add infiniiiiiiiiiity value in array of object
    return n1
}
console.log(addcart(100,200,300,400));

function addC(val1, val2, ...num1){
    return num1
}
console.log(addC(200,20000,300,4000,390,49569));


//passing the object as a function
const user={
    // name:"chinu",
    // price:199
}
function handleobj(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
}
handleobj(user);
// handleobj(user);
handleobj({//we can also directly pass the obj
    name:"prashant",
    price:100
})

//passing the array as a function
const myarr=[100,200,250,300]
function returnsecval(getarr){
    return getarr[1]
}
// console.log(returnsecval(myarr));
console.log(returnsecval([100,300,400,290]));