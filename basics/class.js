class animal{
    constructor(name,age){//this is parent constructor...
        this.name=name;
        this.age=age;
    }
    walks(x){// parent method
        return `yes i walk on ${x}`;
    }
}
//object for class
const janwar=new animal("Doggo",21);//janawar is object for class animal
let dogmethod=janwar.walks("floor");
console.log(janwar,dogmethod);
console.log(janwar.walks("ground"));
//inheritance
class human extends animal{//human inherits all the properties of class animal...
    constructor(name,age,talent){
    super(name,age);//it works as this.name=name and this.age=age
    //By calling the super() method in the constructor method, we call the parent's constructor method 
    this.talent=talent;
    }
    show(){
        return `i have ${this.talent} talent`;
    }
}
const person=new human("john",20,"singing");
console.log(person.show());
console.log(person.walks("floor"));

