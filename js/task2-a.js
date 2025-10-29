const numbers = [];

for (let i = 0; i < 5; i++) {
  const input = prompt(`Enter Number ${i + 1}:`);
  const num = Number(input);
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    alert('Please enter a valid number.');
    i--;
  }
}

console.log('Numbers:', numbers);

const searchInput = prompt('Enter a Number to Search:');
const searchNum = Number(searchInput);

if (numbers.includes(searchNum)) {
  console.log(`Number ${searchNum} is found in the array.`);
} else {
  console.log(`Number ${searchNum} is NOT found in the array.`);
}

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort((a, b) => a - b);

console.log('Sorted Numbers:', numbers);
