const number = prompt('Anna positiivinen kokonaisluku:');

let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
}

const outputElement = document.querySelector('main');

outputElement.innerText = `Numeroiden summa on ${sum}`;
