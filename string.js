console.log("We are at string tutorial");
const name = "Vishal";
const greeting = "Godd Morning";
console.log(greeting +' ' + name);

let html;
html = "<h1> this is Heading </h1>" + "<p>this is my para</p>";

html = html.concat('this','str2');
console.log(html);
// console.log(html);
// console.log(html.length);
// console.log(html.toLocaleLowerCase());
// console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(4));
console.log(html.endsWith('dskjukdhs'));
console.log(html.substring(2,6));
console.log(html.slice(2,8));
console.log(html.replace('para','val'));


