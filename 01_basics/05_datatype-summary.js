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

// console.table([typeof(arr), typeof(myObj), typeof(myFunction)]);


  /*
  ==========memory allocation
  
  stack(primitive)
  where copy of variable is pass to the operation means actual cant change when we change copied variable

  Heap(non primitive)
  it stores single copy of variable means it change when we change copied variable

  */

  userOne={
    name:"ganesh",
    age:21
  }
  userTwo=userOne
  userOne.name="Ganesh"

  console.table([userOne, userTwo]);