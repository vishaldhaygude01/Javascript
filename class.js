class employee{
    constructor(name,experience,division){
        this.name = name;
        this.experience = experience; 
        this.division = division;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joinYear(){
        return 2022 - this.experience;
    }
    static add(a,b){
        return a + b;
    }
}
class Programmer extends employee{
    constructor(name,experience,division,language,github){
        super(name,experience,division);
        this.language = language;
        this.github = github;   
    }
    static favLanguage(){
        if(this.language == 'python'){
            return 'python';
        }
        else{
            return 'JavaScript';
        }
    }
    static multiply(a,b){
        return a * b;
    }
}

// vishal = new employee("Vishal",56,"Div-1");
// console.log(employee.add(2,3));

omkar = new Programmer("Omkar",5,"div-A","CPP","Omkar234");
console.log(omkar);