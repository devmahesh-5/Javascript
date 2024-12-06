
// const {message,messageAgain}=require("./message");
// console.log(message());
// console.log(messageAgain("Hari"));
            // now in ES6
import mahesh,{ message,messageAgain } from "./message.js";//mahesh is default export
console.log(message());
messageAgain("Hari");
console.log(mahesh());
