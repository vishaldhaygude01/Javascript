const students = [
    {name:"Vishal",subject:"JavaScript"},
    {name:"Omkar",subject:"Python"}
]

function enrollStud(student){
    setTimeout(function(){
        students.push(student);
        console.log("Students has been logged");
    }, 1000);
}
function getStud(){
    setTimeout(function(){
        let str = " ";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched")
    }, 3000);
}

let newStud = {name:"sunny",subject:"css"};
enrollStud(newStud);
getStud();