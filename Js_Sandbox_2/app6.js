// REPLACE ELEMENT

// Create Element

const newHeading = document.createElement('h2');

// Add id

newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parenet
const cardAction = document.querySelector('.card-action');


// console.log(newHeading);
// console.log(oldHeading);
// console.log(cardAction);

// Replace
cardAction.replaceChild(newHeading,oldHeading);

// Remove

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// console.log(lis);
// console.log(list);

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASS AND ATTR

const firstLi = document.querySelector('li:first-child');

// console.log(firstLi.children[0]);

const linkToRemove = firstLi.children[0];

let val;

// CLASSES

val = linkToRemove.className;
console.log(val);

val = linkToRemove.classList;

val = linkToRemove.classList[0];

linkToRemove.classList.add('test');
linkToRemove.classList.remove('test');
console.log(val);

console.log(linkToRemove);


val = linkToRemove;

// ATTR
val = linkToRemove.getAttribute('href');
val = linkToRemove.setAttribute('href','https://www.facebook.com/');

linkToRemove.setAttribute('title','Facebook');

val = linkToRemove.hasAttribute('title');

linkToRemove.removeAttribute('title');


console.log(val);
console.log(linkToRemove);
















