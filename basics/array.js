const arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// })
arr.forEach(val=>console.log(val))
//to return new array,use map
const newarr= arr.map(val=>val*2);
//to filter and return it to new array use filter
const newFilterArr = newarr.filter(val => val > 3);//for multiple values
console.log(arr);
console.log(newarr);
console.log(newFilterArr);
let users = [
    { firstName: "Susan", age: 14 },
    { firstName: "Daniel", age: 16 },
    { firstName: "Bruno", age: 56},
    { firstName: "Jacob", age: 15 },
    { firstName: "Sam", age: 64 },
    { firstName: "Dave", age: 56 },
    { firstName: "Neils", age: 65 }
];

let obj = {
    name: "mahesh",
    age: 19,
    lname: "bhandari"
}
//find the user with age 56
let newUser = users.find(user => user.age === 56);//for one user value
let newUsers = users.filter(user => user.age === 56);//for multiple user values
console.log(newUser);
console.log(newUsers);

//destructuring
let [a, b, c] = arr;
console.log(a, b, c);
//rest operator
let { name, age, ...rest } = obj;
console.log(name, age, rest);
//spread operator use to expand an iterable
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
let arr3 = [...arr1, ...arr2];//expands and put in arr3
console.log(arr3);
console.log(...arr1, ...arr2);//spread expands the array into individual elements
const obj1 = {
    name: "mahesh",
    age: 19,
    lname: "bhandari",
    hobbies: {
        name: "play",
        location: "Nepal"
    }
}
const obj2 = {
    num1: 10,
    num2: 20
}
const obj3 = {
    ...obj1,
    ...obj2
}//spread does not expand the object but copies the key value pair in obj3
// console.log(...obj1);//error as spread does not expand the object because it is not iterable
console.log(obj3);
// console.log(...obj1,...obj2);

//set--> it is a collection of unique values
//new Set() removes duplicate and expands the iterable into individual elements
//new is used to create new object
const set = new Set([1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8]);
console.log(set);
let animals = [
    {
        name: 'Lion',
        category: 'carnivore'
    },
    {
        name: 'dog',
        category: 'pet'
    },
    {
        name: 'cat',
        category: 'pet'
    },
    {
        name: 'wolf',
        category: 'carnivore'
    }
];
let set2 = new Set(animals.map(ele => ele.category));
console.log(set2);
let set1 = [...new Set(animals.map(ele => ele.category))];//here we are using spread operator to expand the set into individual elements and later it is in an array
console.log(set1);
//dynamic object notation
let obj4 = {
    name: "mahesh",
    age: 19,
    "lname": "bhandari",
    email: "n31mahesh@gmail"
}
let obj5 = {
    [obj4.name]: obj4.age
}
console.log(obj5);
console.log(obj4['lname']);
let staffs = [
    { name: "Susan", age: 14, salary: 100 },
    { name: "Daniel", age: 16, salary: 120 },
    { name: "Bruno", age: 56, salary: 400 },
    { name: "Jacob", age: 15, salary: 110 },
    { name: "Sam", age: 64, salary: 500 },
    { name: "Dave", age: 56, salary: 380 },
    { name: "Neils", age: 65, salary: 540 }
];
let total = staffs.reduce((prev, curr) => {
    // console.log(curr.salary);//prev=0 and curr= { name: "Susan", age: 14, salary: 100 }
    prev += curr.salary;
    return prev;
},0);
let tith=staffs.reduce((prev,curr)=>{
    prev+=curr.salary*0.1;
    return prev;
},0);
console.log(total);
console.log(tith);

let arrTest=[1,2,3,4,5,1,2,3,4,5,7,3,1,3,2];

let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
//array method
//for safe es2023 introduced... tosorted() and toreversed() which doesnot alter orginal
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
const reversed=months.toReversed();
console.log(sorted);
console.log(reversed);
console.log(sorted.concat(reversed));
const points = [40, 100, 1, 5, 25, 10];
points.sort();//gives wrong output as it compares as string so,
points.sort(function(a,b){return a-b})//change in original
console.log(points);
const intro="I ams Mahesh Bhandari";
console.log(intro.split(" "));
console.log(intro.slice(0,4));
console.log(intro.substring(0,4));
console.log(intro.substr(0,4));
console.log(intro.replace("Mahesh","Mahesh Bhandari"));

