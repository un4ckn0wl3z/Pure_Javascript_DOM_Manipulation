const firstName = 'Anuwat';
const lastName = 'AK';
const age = 23;
const str = 'Hello there, my name is Anuwat';
const tags = 'web development, web design, web programming';

let val;

val = firstName + lastName;

// Concatnation

val = firstName + ' ' + lastName;

// Append

val = 'Pansa ';
val += 'Jitbunjong'

// 

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, i can\'t wait';

// Length
val = firstName.length;

// concat

val = firstName.concat(' ', lastName);


// Change case

val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[2]

// IndexOf

val = firstName.indexOf('n');

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

val = val.lastIndexOf('a');

// charAt

val = firstName.charAt(2);

// Get last char

val = firstName.charAt(firstName.length-1);

val = firstName.substring(0,4);

// slice

val = firstName.slice(0,4);

val = firstName.slice(-3);

// split

val = str.split(' ');

val = tags.split(',');

val = str.replace('Anuwat', 'un4ckn0wl3z');

// includes

val = str.includes('foo');

console.log(val);












