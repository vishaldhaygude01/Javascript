const proto = {
    slogan: function(){
        return 'This company is the best';

    },
    changeName: function(newName){
        this.name = newName;
    }
}
const vishal = Object.create(proto);
vishal.name = "Vishal";
vishal.role = "Programmer";
vishal.changeName = "Omkar";
// console.log(vishal);

//employee constructor
function employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
Employee.prototype.slogan =  function(){
    return `This company is the best. regards, ${this.name}`;

}

let vishalObj = new Employee("Vishal",300000,15);
console.log(vishal);