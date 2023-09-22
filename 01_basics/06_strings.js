const name="   Ganesh   "
const repoCount=50

// console.log(name+repoCount+"value");

// console.log(`Hello my name is ${name} my repoCount is ${repoCount}`);

const userName=new String("ganesh")// another way to define strngs which supports string manipulations functons

// console.table([userName.length, 
//     userName.toUpperCase(), 
//     userName[0], 
//     userName.__proto__, 
//     userName.charAt(3),
//     userName.indexOf('g')
// ]);

// const newString=userName.substring(0,4)
// console.log(newString);

// const anotherString=userName.substring(-1,5)
// console.log(anotherString);

// const newStringOne=userName.trim()
// console.log(newStringOne);

const url="ganesh%20darewaar.com"

console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(url.split('e'));
