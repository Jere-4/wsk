const degreesC = prompt('Anna lämpötila (C):');
const degreesF = (degreesC * 9) / 5 + 32;

const outputElement = document.querySelector('main');

outputElement.innerText = `${degreesC} celsiusastetta on ${degreesF} fahrenheittia.`;
