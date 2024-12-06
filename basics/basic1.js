//var hoist declaration i.e shift declaration to top...
//i.e we can use 'var' before declaring
//hoisting is not done for initialization...(for eg: var i=2;)

// name="mahesh";
// console.log(name);
// var name;

//objects in js
/*const person={
    fName:"Mahesh",
    lName:"Bhandari",
    age:19,
    fullName: function() {
        return this.firstName + " " + this.lastName;
      }//this is method
    //asscessing object method=>objectName.methodName()//invoke function...
};

console.log(person.age);

delete person.fName;
console.log(person.fName);
person.lName="no"//can be changed...
console.log(person);



//nested object
const myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  //displaying object
  let text="";
  for (const key in myObj) {
    
     text+= myObj[key];
 
  }
//use object.entries() instead...
  for (const element of Object.entries(myObj)) {
    text+=element;
  }
  console.log(text);
  //using JSON Stringfy we can display object...
  mystring=JSON.stringify(myObj);
  console.log("\n"+mystring);
  
//  Object Constructor Functions
// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.
function Objperson(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
//adding property
Objperson.prototype.nationality = "English";
//adding constructor method...
Objperson.prototype.add = function (hs) {
  this.house = hs;
}

const father= new Objperson("Fath","Bhandari",12,"red");
father.fullName();
father.add("EARTH");
console.log(father);*/
                      //js string
  //only toUpperCase() and toLowerCase() return value to same string
  //strings are immutable
/*let x = new String("John");//object of string
let y = new String("John");
console.log(x===y);//always false comparing object...
      //string methods
//The charAt() method returns the character at a specified index (position) in a string:
let strs="MAhesh";
const name = "W3Schools";
let letter = name.at(2);//es2022
console.log(letter);

let str=strs.charAt(0);
console.log(strs.charCodeAt(1));//gives ascii

console.log(str);
      //Extracting String Parts
      let text = "Apple, Banana, Kiwi";
      let part = text.slice(-12, -6);//part=Banana
      console.log(text.substring(-1,3));//app <0= 0
      console.log(text.substr(1,5));// 5 is length not end index i.e =>"pple,"
      console.log(part);
      //if second parameter is omitted, it will extract remaining string to last*/
                    //array
/*let arr=[3,45,20];
//array search
console.log(arr.findIndex(myfunction));
function myfunction(value,index,arr) {
  return value==45;
}
//array method
//for safe es2023 introduced... tosorted() and toreversed() which doesnot alter orginal
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
const reversed=months.toReversed();
console.log(sorted);
console.log(reversed);
console.log(sorted.concat(reversed));
const points = [40, 100, 1, 5, 25, 10];
points.sort();//gives wrong outut as it compares as string so,
points.sort(function(a,b){return a-b})
console.log(points);
*/
                    //date objects
/*let dat=new Date();
const d = new Date("October 13, 2014 11:13:00");
console.log(d);
console.log(dat);
//get methods...
//The get methods return information from existing date objects.
// In a date object, the time is static. The "clock" is not "running".
// The time in a date object is NOT the same as current time.
console.log(dat.getFullYear());
//Math.random
console.log(Math.floor(Math.random()*100)+1);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(getRndInteger(1,100));
 */

    //2.for in loop 
// for (key in object) {
//   // code block to be executed
// }
    //3.for of loop
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// syntax:: for (variable of iterable) {
//   // code block to be executed
// }
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// }
              //JS set =>it is object type=>object
/*let a=new Set(["Mahesh","Bhandari",34]);
a.add("yes");
let b=a.values();
for (const element of b) {
  console.log(element);
}

console.log(a);
            //JS map =>it has key value pair type=>object
let c=new Map([["name","Mahesh"],
["age",12]]);
c.set("lname","Bhandari");
console.log(c);

if (c.has("name")) {
  console.log(c.get("name"));
  
}
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
console.log(text);*/
        //JS Destructuring
   // The destructuring assignment syntax unpack object properties into variables:
  
   // Create an Array
/*const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers;//rest create new array with remaining numbers
console.log(a,b,rest);
          // RegExp
let text = "Visit microsoft! microsoft!";
let result = text.replace(/microsoft/g, "W3Schools");
console.log(result);
const pattern = /are/;
let bol=pattern.test("The best things in life are free!");//searches for are
console.log(bol);
let x="   My name is  javascript.    ";
console.log(x.trim());*/
 
          //JSON
 //employees is json array[...] and it contains three json objects=>{...}
/*  let text = '{ "employees" : [' +
 '{ "firstName":"John" , "lastName":"Doe" },' +
 '{ "firstName":"Anna" , "lastName":"Smith" },' +
 '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
 const obj=JSON.parse(text);
 console.log(obj["firstName"]); */
             //Class in JS
/*class animal{
  constructor(name,age){//this is parent constructor...
    this.name=name;
    this.age=age;
  }
  walks(x){// parent method
    return `yes i walk on ${x}`;
  }
}
//create objects for class
const janawar=new animal("Doggo",21);//janawar is object for class animal
let dogmethod=janawar.walks("floor");
console.log(janawar,dogmethod);
//inheritance...
 class human extends animal{//human inherits all the properties of class animal...
  constructor(name,age,talent){
  super(name,age);//it works as this.name=name and this.age=age
  //By calling the super() method in the constructor method, we call the parent's constructor method 
  //and gets access to the parent's properties and methods. 
  //now we can use walk method in child class as it was its own method...  
  this.talent=talent;
  }
  show(){//added method
    return `this is ${this.name} speaking with talent ${this.talent}`;
  }
 }
 const man=new human("Mahesh",19,"cricket");
 console.log(man,man.walks("garden"),man.show());*/

/*
                    //Getters and Setters
class car {
  constructor(brand) {
    this.carname=brand; 
  }
  get engine(){
     return this.carname;//now this.car is the value after modification from setter
     //it returns to myCar.engine
  }
  set engine(x){//x is Volvo
    this.carname+=" & "+ x;//modifying the value
    //to set or edit the property before returning getter/setter method is used...
  }
}
 const myCar=new car("Ford");//instance of car class here myCar is object of class car and   we pass Ford as an argument in constructor function 
 myCar.engine="Volvo";//we set the value passing volvo in x
 console.log(myCar);
 
 console.log( myCar.engine);//don't use paranthesis//get engine method...
*/
                  //static method=>
 // Static methods are methods that belong to a class, rather than an instance of the class.
//   Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.
 class greet {
  constructor(say) {
    this.say=say;
  }
  static hello(){
    return 4;
  }
  static yes(x){
    return "Hello!"+x.say;
  }
 }
 const obj1= new greet("Hey");//constructor called
 const obj2=new greet("Namaste");
console.log(greet.hello());//class object itself calls method but not by object... for static methods only
console.log(greet.hello());
//we can use object by passing it as parameter
console.log(greet.yes(obj2));

//passing object to function..
const handleObject=(obj)=>{return `Usename is ${obj.userName} and Price is ${obj.price}`;};
console.log(handleObject({
  userName:"MAhesh",
  price:123
}));
//IIFE
(function imidiately() {
  console.log("DB CONNECTED");
  
})();
( ()=>{console.log("Immidiately invoked function is used for avoiding data pollution inside function by global");
})();
/*
// setInterval(() => {//this is callback function
//   const d=new Date();
//   console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  
// }, 1000);
setTimeout(() => {
  const d=new Date();
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  
}, 1000);
const arr=[2,3,4,6];
const arrmapped = arr.map((x)=> x*2 );//change each element of an array and returns new array

console.log(arrmapped[0]);
const arrFilter=arr.filter((value,index,arr)=> value>3)//returns new array by filtering the elements
console.log(arrFilter);
const arrReduced=arr.reduce((previousValue,currentValue,index,arr)=>currentValue+=previousValue);//returns value not array 2,0=2=>5=>9=>15
console.log(arrReduced);

*/