console.log("Heloo");

let obj = {
    name:"Vishal",
    channel:"CodeWithVishal",
    address:"Mars"
}

function Obj(givenName){
    this.name = givenName;
}

Object.prototype.getName = function(){
    return this.name;
}

let obj2 = new Obj("Vishal");
console.log(obj2);