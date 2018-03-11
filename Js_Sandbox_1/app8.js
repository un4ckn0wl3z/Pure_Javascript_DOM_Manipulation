// Create some arrays
const numbers = [43,56,33,23,44,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1,b:2}, new Date()];

console.log(mixed);

let val;

// Get array length

val = numbers.length;
val = Array.isArray(numbers);

// get a single value from array

val = numbers[0];
val = numbers[3];

// insert into array

numbers[2] = 100;

val = numbers.indexOf(23);

// MUTATING ARRAYS

// Add on to end

// numbers.push(250);

// Add on to front

numbers.unshift(120);

// Take of from end
numbers.pop()

// Take of from front

numbers.shift()
 
// Splice values

// numbers.splice(1,1);

numbers.reverse()

console.log(numbers);

// Concatenate arr

val = numbers.concat(numbers2);

// Sorting arr

// val = fruit.sort()

// compare

arrSort = val.sort(function(x,y){
  return x-y;
});

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);



console.log(val);







