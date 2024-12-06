let users = [
    {
        name: "Sam",
        age: 64,
        hobby: "cooking",
        hobbies: {
          hobby1: "cooking",
          hobby2: "sleeping"
        }
      },
      { name: "Bruno", age: 56 },
      { name: "Dave", age: 56, hobby: "Football" },
      {
        name: "Jacob",
        age: 65,
        hobbies: {
          hobby1: "driving",
          hobby2: "sleeping"
        }
      }
];
 //users.forEach((user)=>{console.log(user.hobbies.hobby1)});
 //if null / undefined is encountered (i.e no object with hobbies.hobby1) it throws eror and breaks so to avoid that we use optional chaining or conditional operator
/* When you look in your console, you'll notice that the first iteration was completed, but the second iteration had no hobby. So it had to throw an error and break out of the iteration – which meant it couldn't acquire data from other Objects in the array. */
//use conditional operator
// users.forEach((user)=>console.log(user.hobbies && user.hobbies.hobby1));
// //use optional chaining
// users.forEach((user)=>{
//     console.log(user?.hobbies?.hobby2);//if null or undefined returns null else go for nested object value and again check and so on...
// })
users.forEach((user)=>{
  console.log(user?.hobbies?.hobby1);
  
})