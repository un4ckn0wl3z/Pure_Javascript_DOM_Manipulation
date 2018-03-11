// if(somthing){
//   do somthing
// }else{
//   do somthing else
// }

const id = 100;

// // EQUAL TO

// if(id == 100){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO

// if(id != 101){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE

// if(id === 100){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT');
// }


// if(id !== 100){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT');
// }



// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// }else{
//   console.log('NO ID');
// }


// GREATER THAN OR LESS THAN

// if(id >= 100){
//   console.log('CORRECT')
// }else{
//   console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// }else if(color === 'yellow'){
//   console.log('Color is yellow');
// }else{
//   console.log('I don\'t know');
// }

// LOGICAL OPERATORS

const name = 'Anuwat';
const age = 23;

// AND &&

if(age > 0 && age < 12){
  console.log(`${name} is a child`);
}else if(age >= 0 && age <= 19){
  console.log(`${name} is a teenager`);
}else{
  console.log(`${name} is a adult`);
}

// OR ||

if(age < 16 || age > 65){
  console.log(`${name} cannot run in race`);
}else {
  console.log(`${name} is registed for the race`);
}

// TERNARY OPERATOR

console.log(id === 100 ? 'CORRECT':'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');




