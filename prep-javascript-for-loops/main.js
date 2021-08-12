// create your loops here

console.log('loop runs 10 times, increments by 1; prints 0 to 9');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('loop runs 10 times, increments by 2');
for (let i = 0; i < 20; i += 2) {
  console.log(i);
}

console.log('loop runs 100 times; i decrements by 1 each time');
for (let i = 100; i > 0; i--) {
  console.log('Time til explosion: ' + i + '!');
}
