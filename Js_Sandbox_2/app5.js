// Create element

const li = document.createElement('li');

// Add class 
li.className = 'collection-item';

// Addd Id
li.id = 'new-item';

// Add attribute
li.setAttribute('title','New item');

// Crate text node

li.appendChild(document.createTextNode('Hello World'));

// Create new link element

const link = document.createElement('a');
console.log(link);

// Add class

link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li

li.appendChild(link);

// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);