const name="   Ganesh   "
const repoCount=50

// console.log(name+repoCount+"value");

// console.log(`Hello my name is ${name} my repoCount is ${repoCount}`);

const userName=new String("ganesh")// another way to define strngs which supports string manipulations functons

// console.table([userName.length, 
//     userName.toUpperCase(), 
//     userName[0], 
//     userName.__proto__, 
//     userName.charAt(0),
//     userName.indexOf('g')
// ]);

// const newString=userName.substring(0,4)
// console.log(newString);

/*
The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned
If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
*/

const otherName=userName.slice(-5,2)
console.log(otherName);

// const newStringOne=userName.trim()
// console.log(newStringOne);

const url="ganesh%20darewaar.com"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('hitesh'));
// console.log(url.split('e'));
