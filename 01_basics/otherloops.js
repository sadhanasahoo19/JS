//for of 
const arr=[1,2,3,4]
for (const num of arr) {
    // console.log(num);
    
}
const greetings=["hellow world"]
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

//maps- values stored in key value pair, and stored uniqye values
// const map= new Map
// map.set('in', "india")
// map.set('us','america')
// map.set('ge',"germany")
// map.set('in', "india")//not store this again as map stores only unique values
// console.log(map);

// for (const key of map){
//     console.log(key);//print as it is in a []
    
// }

for (const [key,value] of map){
    // console.log(key, ":-", value);//op: in-india, us-america
    
}

//object forof loop= for of loop in obj is not workable 
const obj = {
    'game1':'nfs',
    'game2':'subway'
}
// for(const[key, value] of obj){
//     console.log(key, ":", value);//error: obj is not iteratable
    
// }

//forin loop for objects
const myobj={
    js:'javascript',
    cpp:'c++',
    py:'python'
}
for (const key in myobj) {
    // console.log(key);//keys aagye toh obj nikalneka tarika easy he=only return keys
    // console.log(myobj[key]);//return the values of the key
    console.log(`${key} shortcut is for ${myobj[key]}`);
    
}

//for in loop for arrays
const prog=["js","java","cpp"]
for (const key in prog) {
    // console.log(key);//return the index= 0 1 2
    console.log(prog[key]);//op- js java cpp
    
}

//for in loop on map
// const map= new Map()//it is not iteratable in forin loops = so not run
// map.set('in', "india")
// map.set('us','america')
// map.set('ge',"germany")
// map.set('in', "india")
// for (const key in map) {
//     console.log(key);
    
// }


