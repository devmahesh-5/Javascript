
arr=[0,10,20,30];
function fn(arr,n){
    if(arr[n]>10){
        return true;
    }
    return false;
    
}

const filter = function(arr, fn) {
    const filteredArr=[];
    for(let i=0;i<arr.length;i++){
     if(fn(arr,i)){
        filteredArr.push(arr[i]);
     }
    }
    return filteredArr;
};
console.log(typeof(filter));
console.log(filter(arr,fn));


