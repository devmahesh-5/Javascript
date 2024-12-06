const myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  //displaying object
  let text="";
  for (const key in myObj) {
     text+= myObj[key];
  }
  // console.log(text);
  
//use object.entries() instead...
  for (const element of Object.entries(myObj)) {
    text+=element;
  }
  console.log(text);