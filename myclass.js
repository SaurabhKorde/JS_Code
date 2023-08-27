//ES6
// class Student{
//     constructor(name) {
//       this.name = name;
//     }
  
//     study() {
//       console.log(`${this.name} is studying.`);
//     }
//   }
  
//   const student1 = new Student("Deva");
//   const student2= new Student("Charmi");
 
//   student1.study(); // Output: Bob is studying.
//   student2.study();


  
  

let newStudent=function(id,name,marks){
    this.id=id;
    this.name=name;
    this.marks=marks
}

newStudent.prototype.printHello=function(){
    console.log(`Hello ${this.name}`);
}


let obj=new Object();

let st1=new newStudent(101,"Deva",94);

console.log("New Student 1st:-",st1.printHello());

//3 
//1 literal 2.instance of object 3.constuctor function