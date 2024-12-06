// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
function expect(val) {
    const obj = {
        toBe: function (val2) {
            if (val === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (val2) {
            if (val !== val2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
    return obj;
}
const a=  expect(10);//no need to use new keyword because expect is a function not constructor function that means it is an object but it was not created using this keyword but object literal.
const b= expect(5);
console.log(typeof(a));
console.log(typeof(expect()));
console.log(typeof(Error));
console.log(a.toBe(10));
console.log(b.notToBe(10));

