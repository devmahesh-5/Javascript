/*
Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.
A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
//in js everythings is object...
//method access the property
function score(name,score) {//construcor function...
    this.name=name;
    this.score=score;//returns this object(here sc1)
}
score.prototype.increment=function(){//method created
    this.score++;
}
score.prototype.print=function(){//method created
 console.log(this.score);
}
const sc1=new score("Mahesh",3);//here new specifies new items are added... 
console.log(sc1);
 
sc1.increment();
sc1.print();
     //eg.2
function setEmail(email) {
    this.email=email;
}
function createUser(name,password,email) {
    this.name=name;
    this.password=password;
    // setEmail(email);//function is called but refrence is not holded..
    setEmail.call(this,email);//calls setEmail use my this not your

}
const user=new createUser("Mahesh","123","n31mahesh@gmail.com");
console.log(user);
console.log(user.email);

                    //string is object...
                    
const mystr="Mahesh      ";
String.prototype.trueLength=function () {//trueLength method created
    console.log(this);
    console.log(`truelength=${this.trim().length}`);
}
mystr.trueLength();
"Hey".trueLength();

const cars=["Honda","Motor","Ford"];
const carpart={
    engine:"CC",
    front:"Bumper"
}
Object.prototype.allObjectMethod=function(){
    console.log(`this is present in all class`);
    
}
cars.allObjectMethod();//everything is object...
carpart.allObjectMethod();
