console.log('CodeWithHarry');  
console.log(1); 
console.log(true); 
console.log(null); ;  
console.log([1, 2, 3]); // array inside log
console.log({name:"Harry", language:"JavaScript", tutorial:2}); // object inside log
console.time();
for (i = 0; i < 100; i++) {
  // code
}
console.timeEnd();
for (i = 0; i<4; i++) {
    console.count(i);
}
console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple'); 
console.log('new section');
const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`; 
console.log('%cCode With Vishal', mystyle);