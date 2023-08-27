let car={
    name:"BMW",
    color:"Black",
    carVersion:{
        version1:"1bmw",
        version2:"2bmw",
    },
    driverName:"Madhav",
    price:88000000,
}

let car2={
    name:"BMW",
    color:"Black",
    carVersion:{
        version1:"1bmw",
        version2:"2bmw",
    },
    driverName:"Madhav",
    price:88000000,
}

let car3={
    name:"BMW",
    color:"Black",
    carVersion:{
        version1:"1bmw",
        version2:"2bmw",
    },
    driverName:"Madhav",
    price:88000000,
}


car.version=11;

car.carDetails=function(){
    console.log(`Car Name is ${this.name},color is ${this.color} and Driver Name ${this.driverName}`);
    // console.log(this);
}

console.log(car.carDetails());
console.log(this);