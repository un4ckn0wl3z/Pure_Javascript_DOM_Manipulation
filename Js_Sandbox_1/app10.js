let val;

const today = new Date();
let birthday = new Date('12-4-1995 19:37:00');
birthday = new Date('December 4 1995');
birthday = new Date('12/4/1995');
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(1);
birthday.setDate(12);
birthday.setFullYear(2012);
birthday.setHours(3);
birthday.setMinutes(32);
birthday.setSeconds(46);
console.log(birthday);