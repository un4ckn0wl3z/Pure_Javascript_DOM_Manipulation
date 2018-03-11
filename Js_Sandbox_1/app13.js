// FUNC DECLA

function greet(firstName='MG', lastName='Loss'){
  // if(typeof firstName === 'undefined'){
  //   firstName = 'Anuwat';
  // }
  // if(typeof lastName === 'undefined'){
  //   lastName = 'AK';
  // }
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNC EXPR

const square = function(x=3){
  return x*x;
};

// console.log(square());

// IMMIDIATLY INVOKABLE FUCN EXPR - IIFEs

// (function(){
//   console.log('IIFEs Ran... ');
// })();

// (function(name){
//   console.log('HELLO: ' + name);
// })('UN4CKN0l3Z');

// PROPERTY METHOD

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add(); 
todo.edit(1337); 
todo.delete(); 







