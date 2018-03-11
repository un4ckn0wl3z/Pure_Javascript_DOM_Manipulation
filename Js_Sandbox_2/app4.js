let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list

// Get child nodes

val = list.childNodes;

// get children element node

// val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecate)
// 3 - Text node
// 8 - Comment
// 9 - Document itself 
// 10 - Doctype


val = list.children;
val = list.children[1];

list.children[1].textContent = 'Hello';

// Children of Children
val = list.children[3].children[0].id = 'test-link';

val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.firstElementChild;




// Count child element
val = list.childElementCount;


// Count child element
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);