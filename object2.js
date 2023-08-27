let carDetails=function(name,color,drivername){
    this.name=name
    this.color=color
    this.drivername=drivername
}

carDetails.prototype.card=function(){
    console.log(`Car Name is ${this.name},color is ${this.color} and Driver Name ${this.driverName}`);
    // console.log(this);
}

let car1= new carDetails("BMW","Black","Madhav");
console.log("Car 1:---",car1);
console.log("Car Details:---",car1.card());
let car2= new carDetails("Swift","White","Raghav");
console.log("Car Details:---",car2.card());
console.log("Car 2:---",car2);

