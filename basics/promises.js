/* const promise1=new Promise(function(resolve,reject){
    //consumming code.. takes time
    //resolve and rejects are callback functions...
    setTimeout(()=>{
        console.log("async task completed...");
        resolve();
    },1000);
})
promise1.then(()=>{
    console.log("Resolved");
    
})*/
const promise2=new Promise((resolve,reject)=>{
    //consuming code(it takes time...)
    setTimeout(()=>{
        let err=false;
        if (!err) {
            resolve({username:"Mahesh",age:19});
        } else {
            reject("Error occured");
        }
        
    },1000);
})
//producing code(it waits)
// this can  be done in 2 ways 
//1.one is ".then(function).catch(function)"
//2.another is async function (){variable await object(i.e promise) and call the wrapped async function}
// promise2.then((userobj)=>{
//     return userobj.username;//returns to next then...
// }).then((uname)=>{
//     console.log(uname);
// }).catch((err)=>{
//     console.log("Error:"+err);
// }).finally(()=>{console.log("promise is either resolve or rejected");

// })

 async function reponseOFPromise() {
    try {
       return await promise2;//it waits for promise to resolve
    } catch (error) {
        console.log(error);
    }
    
}
reponseOFPromise()
.then((userobj)=>{
   console.log(userobj);
   //returns to next then...
})
.finally(()=>{
    console.log("promise is either resolve or rejected");
    
})
//another example
//we know that the await keyword can only be used inside an async function and it always waits for promese to execute and code after it waits for promise to execute.
//but by wrapping it in an async function doesn't wait for the promise to execute. it execute the code after async function doing the promise at same time.

// async function myAsyncFunction() {
//     console.log('Inside async function');
//     // Simulate some asynchronous work
//     // await new Promise(resolve => setTimeout(resolve, 2000));
//     try{
//         const reponse=await new Promise(resolve => setTimeout(resolve, 2000));//await pauses the execution of the async function and waits for the promise to resolve
//         console.log("reponse of 1st promise after 2 seconds");
//     }catch(error){
//         console.log(error);
//     }
//     console.log('Async function completed');//it will execute after 2 seconds when promise is resolved
//   }
  
//   console.log('Before async function');
//  myAsyncFunction();
//   console.log('After async function');//it will execute before 2 seconds when async function is completed
// // d = new Date();
//  function prom(){
//     return new Promise((resolve,reject)=>{
      
//         setTimeout(()=>{
//             resolve("Mahesh");
//         },1000);})
//     }
// prom().then((name)=>{
//     return name;
// }).then((name)=>{
//     console.log(name);
// }).catch((err)=>{
//     console.log(err);
// }); 
