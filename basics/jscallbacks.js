/*
                    JavaScript Callbacks
                    "I'll CALL Later"
A callback is a function passed as an argument to another function.
A callback function can run after another function has finished
When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());*/
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const removeNegative=(numbers,callback)=>{//callback=  (x)=> x>=0
    const positiveNum=[];
    for (const el of numbers) {
        if (callback(el)) {//function is called inside of the another function
            positiveNum.push(el);
        }
    }
    return positiveNum;
}
const positive=removeNegative(myNumbers,x=> x>=0);//function is passed as argument
console.log(positive);


