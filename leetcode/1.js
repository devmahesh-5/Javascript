/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/
//use lexical scope concept here.
const createHelloWorld=(...arg)=>{
    const greeting="hello world";
    const inner=()=>{
       return greeting;
    }
    return inner;
}

//inner();//inner has no scope outside of outer function.
inner=createHelloWorld();
console.log(inner());
console.log(createHelloWorld());
