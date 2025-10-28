const side1 = prompt('Anna kolmion ensimmäisen sivun pituus:');
const side2 = prompt('Anna kolmion toisen sivun pituus:');
const side3 = prompt('Anna kolmion kolmannen sivun pituus:');

if (side1 === side2 && side1 === side3) {
  triangle = 'tasasivuinen';
} else if (side1 === side2 && side1 != side3) {
  triangle = 'tasakylkinen';
} else if (side1 === side3 && side1 != side2) {
  triangle = 'tasakylkinen';
} else if (side2 === side3 && side2 != side1) {
  triangle = 'tasakylkinen';
} else if (side1 != side2 && side1 != side3 && side2 != side3) {
  triangle = 'scalene';
}

const outputElement = document.querySelector('main');

outputElement.innerText = `${triangle}`;
