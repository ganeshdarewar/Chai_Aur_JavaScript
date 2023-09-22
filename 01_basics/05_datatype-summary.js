/*
primitive datatype
string
number
boolean
bigInt
null
undefined
symbol
*/

const id=Symbol(123)
const anotherId=Symbol(123)
console.log(id==anotherId);

const bigNumber=122157148444234614717256n

// console.log(typeof bigNumber);


/*
Reference non primitive datatype

array
object
function => object function
*/

const arr=[1,2,3]

let myObj={
    name:"ganesh",
    roll:24
}

const myFunction=function(){
    console.log("hello");
}

console.table([typeof(arr), typeof(myObj), typeof(myFunction)]);