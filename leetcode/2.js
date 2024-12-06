/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

function counter(n) {
    function inner() {
        return n++;//n initially is 3 n for  next time is 4
    }
    return inner;//scope of inner function is limited to counter function and counter would finish here but inner is closure function so b remains as lexical scope for inner function.
}
const inner= counter(3);
const a=inner();//here n=3
const b=inner();//here n=4
const c=inner();//here n=5
console.log(mahesh);
