console.log(1)
console.log(2)
console.log(3)

let a =34;
a +=1;
a++;
console.log(a);

let j = 110;
while (j < 10) {
  console.log(j + 1);
  j += 1;
}

let k = 0;
do{
    if(k===5){
        k +=1;
        continue;
    }
  console.log(k + 1);
  k +=1;
} while (k < 10);

let arr = [2,5,6,4,2,3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}
arr.forEach(function(element, index, array){
    console.log(element, index, array);
});