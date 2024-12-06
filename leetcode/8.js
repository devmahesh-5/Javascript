// const obj = {
//     a: 10,
//     b: 20
// }
// for (let i = 0; i < 4; i++) {
//     obj[[`key${i}`]] = [i + 2, i + 3];
// }
// const arr = [3, 4];
// if (JSON.stringify(arr) === JSON.stringify(obj[[`key${1}`]])) {
//     console.log("true");
// }
// console.log(obj);
const cache = new Map();
let result;
cache.set(JSON.stringify([2, 3]), 0);
for (let i = 0; i < 4; i++) {
    args=[i + 2, i + 3];

const key = JSON.stringify(args);
if (cache.has(key)) {
    console.log("true");
}
cache.set(key, i);
result = cache.get(key);
console.log(result);
}

console.log(cache);
const arr=[3,4];
console.log(arr.reduce((acc,curr)=>{
    return acc+curr;
}));

