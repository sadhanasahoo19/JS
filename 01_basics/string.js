const name = "om"
 n*const repoCount = 30
console.log(name + repoCount+"bye");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const game = new String('hellow-hc')
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);//get the length of the string
console.log(game.toUpperCase());
console.log(game.charAt(3));//through index we can find letter
console.log(game.indexOf('e'));//through letter we can find index
const newString = game.substring(0,4)//only take a postive index value
console.log(newString);

const anotherString= game.slice(-8,4)//can access by negative value
console.log(anotherString);

const newStr = "  one  "
console.log(newStr);
console.log(newStr.trim()); //this removes the whitespaces

const url = "https"
console.log(url.replace('t','-'));//to replace the value 
console.log(url.includes('p'))//will ensure whether the given value is present in given string or not if it is then value=true else false

const nameSplit = "chinu-the-girl"
console.log(nameSplit.split('-'));//will split into the string

