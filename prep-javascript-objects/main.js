const person = {
  firstName: 'Yunyun',
  lastName: 'Liu',
  hobby: 'learning languages'
};

const fullName = person.firstName + ' ' + person.lastName;

console.log(person);
console.log('the persons name is:', fullName);

person.job = 'student';

console.log('The person is currently a: ' + person.job + '.');

person.previousJob = 'technician';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
