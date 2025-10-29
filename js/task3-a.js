const numbers = [];

let input;
do {
  input = prompt("Enter a number (or 'done' to finish):");
  if (input !== null && input.toLowerCase() !== 'done') {
    const num = Number(input);
    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      alert('Please enter a valid number.');
    }
  }
} while (input !== null && input.toLowerCase() !== 'done');

let evenNumbers = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

const outputDiv = document.getElementById('output');
if (evenNumbers.length > 0) {
  const outputElement = document.querySelector('main');
  outputElement.innerText = `Even Numbers: ${evenNumbers.join(', ')}
  
  End of program.`;
} else {
  const outputElement = document.querySelector('main');
  outputElement.innerText = `Even Numbers: None
  
  End of program.`;
}
