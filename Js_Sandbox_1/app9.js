const person = {
  firstName: 'Anuwat',
  lastName: 'AK',
  age: 23,
  email: 'ak@loc.cl',
  hobbies: ['hack','crack','repeat'],
  address: {
    city: 'BKK',
    stage: 'Bangkapi'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

// console.log(person.firstName);

let val;
val = person;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John',age: 24},
  {name: 'Sopher',age: 19}
];  

for(let i = 0; i< people.length; i++){
  console.log(people[i].name);
}












