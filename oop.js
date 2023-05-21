let car = {
    name:'BMW',
    topSpeed:90,
    run:function (){
        console.log("car is running");
    }
}


//constructor

// new Date();
function generalCar(givenNmae,Speed){
    this.name = givenNmae;
    this.topSpeed = Speed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }

}
car1 = new generalCar('scorpio',180);
console.log(car1);
console.log(car);