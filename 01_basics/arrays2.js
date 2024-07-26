const marvel_heros=["thors","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)//arays ke andar aur ek arrays aajayega
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //3rd element(dc_heros) ka first value

const resultArr = marvel_heros.concat(dc_heros)//this will combine both arrys(marvel and dc heros)
console.log(resultArr);


//spread operator
const allNew  = [...marvel_heros, ...dc_heros]
console.log(allNew);

const anoArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr = anoArr.flat(Infinity)//infinity is the depth of the flat
console.log(realArr);
console.log(Array.isArray("sadhana"));
// console.log(Array.from("sadhana")); //interesting for interviews

let score1 =100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));//returns a new array from a set of elements