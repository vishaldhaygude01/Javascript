console.log("hii");
let element = document.createElement('li');
let text = document.createTextNode('I am the text node');
element.appendChild(text);
element.className = 'childul';
element.id = 'createdli';
element.setAttribute('title','mytitle');
let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);
let ele = document.createElement('h3');
ele.id = 'ele';
ele.className = 'ele';
let node = document.createTextNode('This is created node for ele');
ele.appendChild(node);
element.replaceWith(ele);



