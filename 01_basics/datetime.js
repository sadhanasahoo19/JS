//dates calcualte in miliseconds
let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

let ndate = new Date(2024, 0, 23,5,3)
console.log(ndate.toDateString());
console.log(ndate.toLocaleString());


let myDate = new Date("2023-01-25")//yyyy-mm-dd
console.log(myDate.toLocaleString());

let newwDate = new Date("01-14-2024")//dd-mm-yyyy
console.log(newwDate.toLocaleString());

let timestamp = Date.now()
console.log(timestamp);
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

