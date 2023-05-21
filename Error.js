let a = "Vishal";
a = undefined;


if(a != undefined){
    throw new Error('This is not Undefined');
}
else{
    console.log('This is Undefined');
}


try{
    console.log("we are inside try block");
    // functionVish();
}catch(error){
    console.log('are you okay?');
    // console.log(error.message);
}finally{
    console.log("Finally we will run this");
}
