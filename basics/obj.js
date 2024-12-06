const obj={
    a:10,
    b:20,
    state:{
        name:"ktm",
        // capital:"kathmandu"
    }
}
//constructor function-->used to create multiple instance 
function Person(name,age){
    this.name=name;
    this.age=age;
}
const i=new Person("mahesh",19);
const you=new Person("Hari",20);
// const {a,state:{capital="Nepal"},b:c}=obj;//destructuring
const {a,b,state:{name},b:c}=obj;
// console.log(a,c,capital);
console.log(a,b,name,c);

//The rest operator (...) collects the remaining elements of an array or object into a new array or object:
const arr=[1,2,3,4,5,6,7,8,9,10];
const [a1,a2,...b1]=arr;
console.log(`${b1} is the remaining elements of array`);
console.log(typeof(b1),b1);
//The spread operator also uses ... but is used to expand an iterable into individual elements:
const arr1=[1,2,3,4,5,6,7,8,9,10];
const arr2=[...arr1,11,12];
console.log(`${arr2} is the new array with spread operator`);


// ( function myComponent(){
//    console.log("hello");
// });
                //difference between arrow function and regular function

                    //In a regular function, the this keyword refers to the object from which you call the function. In an arrow function, the this keyword refers to the object from which you define the function.
                    var timeLimit = function(fn, t) {
                        return async function(...args) {
                            return new Promise((resolve, reject) => {
                                let timerId;
                                fn(...args)
                                    .then(result => {
                                        resolve(result);
                                    })
                                    .catch(error => {
                                        reject(error);
                                    }).finally(() => {
                                        clearTimeout(timerId);
                                    });
                    
                                timerId = setTimeout(() => {
                                    reject('Time Limit Exceeded');
                                }, t);
                            });
                        };
                    };