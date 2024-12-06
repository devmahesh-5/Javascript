const arr=[0,10,20,30];
const num=arr.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(typeof(num));

console.log(num);//60
