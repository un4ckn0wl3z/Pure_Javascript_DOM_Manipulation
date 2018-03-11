document.querySelector('.clear-tasks').removeAttribute('href');

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
taskInput.value = '';

heading = document.querySelector('h5');

// form.addEventListener('submit', runEvent);

// key diw
// taskInput.addEventListener('keyup',runEvent);

// key dup
// taskInput.addEventListener('keyup',runEvent);

// key press
// taskInput.addEventListener('keypress',runEvent);

// Focus
// taskInput.addEventListener('focus',runEvent);

// Blur
// taskInput.addEventListener('blur',runEvent);

// Cut
// taskInput.addEventListener('cut',runEvent);

// paste
// taskInput.addEventListener('paste',runEvent);

// input
taskInput.addEventListener('input',runEvent);

 function runEvent(e){
   console.log('Event type: '+e.type);
  //  // Get input Value
  //  console.log(taskInput.value);
  //  e.preventDefault();

  console.log(e.target.value);
  heading.innerText = e.target.value;
 }