// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)
console.log(2>"1") //we must ensure to put same datatype 

console.log(null>0);//the reason is than an equality check == and comparison ><>=<= work differently
console.log(null==0);//comparison convert null to num, treating it as 0
console.log(null>=0);//thats why (3) null>=0 is true and null>0 is false

console.log((undefined == 0));
console.log(undefined >0);

//===this sstrictly checks the value
console.log("2" === 2);