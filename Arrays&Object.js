const marks = [34,23,56,78,45,84];
const fruits = ['Orange', 'Mango', 'Apple'];
const mixed = ['str',45,[2,7]];
const arr = new Array(23,56,78,'hii');
console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);

console.log(arr.length);
console.log(Array.isArray('hhks'));

arr[0] = 'vishal';
console.log(arr);
console.log(marks);
let val = marks.indexOf(84);
console.log(val);
marks.push(44);
console.log(marks);
marks.unshift(55);
console.log(marks);
marks.pop();
console.log(marks);
marks.splice(2,6);
console.log(marks);