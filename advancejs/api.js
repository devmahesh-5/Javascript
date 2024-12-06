//fetch has priority micro task queus than other callbacks
// async function responseToApi() {
//     try {
//         const response = await fetch('https://randomuser.me/api/');//it takes time...//it is direct resolve that is it works like .then but if fails then goes directly to catch
//         const resStrApi= await response.json();//it also takes time
//         console.log(resStrApi);
        
//     } catch (error) {//reject
//         console.log(error);    
//     }
// }
// responseToApi();
                                            //OR
fetch('https://randomuser.me/api/')//it returns promise
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data.results[0].name.first);
    
}) .catch((error)=>{
    console.log(error);
    
})