const arr=[1,2,3];
for(let i=0;i<arr.length;i++){
    const transformedArr=[];
    (function mapfunction(){
        transformedArr[i]=arr[i]+i;
    }());
}
for(let i=0;i<arr.length;i++){
 console.log(transformedArr[i]);
}