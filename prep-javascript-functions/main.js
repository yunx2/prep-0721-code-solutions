function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('expect: 120', 'actual:', minutes);

function getGreeting(name) {
  return `Hello ${name}!`;
}

const greeting = getGreeting('Yunyun');

console.log('expect:', 'Hello Yunyun!', 'actual:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiplyResult = addAndMultiplyBy5(10, 5);

console.log('expect:', 15 * 5, 'actual:', addAndMultiplyResult);
