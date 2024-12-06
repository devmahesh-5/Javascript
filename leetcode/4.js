function createCounter(init){
    let value=init;
    return {
        increment: function(){
            value++;
            return value;
        },
        reset: function(){
        value=init;
            return value;
        },
        decrement: function(){
            value--;
            return value;
        }
    }
}
const initializeNum=createCounter(10);
console.log(initializeNum.increment());
console.log(initializeNum.increment());
console.log(initializeNum.reset());//itneeds to return 10
console.log(initializeNum.decrement());
console.log(initializeNum.decrement());


