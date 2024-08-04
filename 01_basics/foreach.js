const lang =["py","cpp","js","css"]
// lang.forEach( function (item) {
//     console.log(item);
    
// })

// lang.forEach((val)=>{//foreach in array as a arrow function
//     console.log(val);
    
// })

function printMe(item){
    console.log(item);
    
}
lang.forEach(printMe)//just give a reference dont use () =execution


lang.forEach((item, index, arr)=>{
    console.log(item, index, arr);
    //op= py 0 [py.css.js].....etc
})

//arrays ke andar ka objects
const coding=[
    {
        languagename:"js",
        langfilename:".js"
    },
    {
        languagename:"java",
        langfilename:".java"
    },
    {
        languagename:"python",
        langfilename:".py"
    },
]
coding.forEach((item)=>{
    console.log(item.languagename);
    
})