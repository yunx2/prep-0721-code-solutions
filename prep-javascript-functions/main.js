// 1. addTwoNumbers
function addTwoNumbers(x, y) {
  return x + y;
}

const sum = addTwoNumbers(4, 4);
console.log('expected:', 8, 'actual:', sum);

// 2. convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('expect: 120', 'actual:', minutes);

// 3. getGreeting
function getGreeting(name) {
  return `Hello ${name}!`;
}

const greeting = getGreeting('Yunyun');
console.log('expect:', 'Hello Yunyun!', 'actual:', greeting);

// 4. addAndMultiplyBy5
const addAndMultiplyBy5 = function (num1, num2) {
  return (num1 + num2) * 5;
};

const addAndMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('expect:', 15 * 5, 'actual:', addAndMultiplyResult);

// 5. multiplyAndDivideBy5
const multiplyAndDivideBy5 = function (num1, num2) {
  return (num1 * num2) / 5;
};

const multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log(`expect: ${(35 * 10) / 5} actual: ${multiplyAndDivideResult}`);

// 6. subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(22, 7);
console.log('expect:', 22 - 7, 'actual:', difference);

// 7. getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circ = getCircleCircumference(5);
console.log('expect:', 2 * Math.PI * 5, 'actual:', circ);

// 8. getFullName
const getFullName = function (firstName, lastName) {
  return firstName + ' ' + lastName;
};

const fullNameResult = getFullName('Valerie', 'Liu');
console.log(`expect: Valerie Liu actual: ${fullNameResult}`);

// 9. cube
function cube(number) {
  return number * number * number;
}

const cubedResult = cube(5);
console.log(`expect: ${5 * 5 * 5} actual: ${cubedResult}`);
