// // GET ELEMENT BY ID

// console.log(document.getElementById('task-title'));

// // Get things from the element

// console.log(document.getElementById('task-title').id);

// console.log(document.getElementById('task-title').className);

// const taskList = document.getElementById('task-title');

// // Change Styling

// taskList.style.background = '#333';

// // document.getElementById('task-title').style.background = '#fff';

// taskList.style.padding = '5px';

// // document.getElementById('task-title').style.display = 'none';

// // Change content

// taskList.textContent = 'Task List'; 

// taskList.innerText = 'My Tasks'; 

// taskList.innerHTML = '<span style="color:red">Task List</span>';

// // document query selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';

document.querySelector('li:nth-child(3)').style.color = 'green';

document.querySelector('li:nth-child(4)').textContent = 'Hello Wolrd!';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';

document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';