document.querySelector('.clear-tasks').removeAttribute('href');

// document.querySelector('.clear-tasks').setAttribute('href','https://www.google.co.th/?gws_rd=cr&dcr=0&ei=1e6jWuL7HcOa8QXP_KFw');

// document.querySelector('.clear-tasks').setAttribute('href','#');

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('Hello World');
//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
 // console.log('Clicked');
 let val;
 val = e;
 // Evel target element
 val = e.target;
 val = e.target.id;
 val = e.target.className;
 val = e.target.classList;
 e.target.innerText='Clicked';

 // Event Type

 val = e.type;

 // Time stamp
 val = e.timeStamp;

 // Coords
 val = e.clientY;
 val = e.clientX;

 val = e.offsetY;
 val = e.offsetX;

 console.log(val);
}