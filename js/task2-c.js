const coordinateX1 = prompt('Anna ensimmäisen pisteen x-koordinaatti:');
const coordinateY1 = prompt('Anna ensimmäisen pisteen y-koordinaatti:');

const coordinateX2 = prompt('Anna toisen pisteen x-koordinaatti:');
const coordinateY2 = prompt('Anna toisen pisteen y-koordinaatti:');

const x = coordinateX2 * coordinateX2 - coordinateX1 * coordinateX1;
const y = coordinateY2 * coordinateY2 - coordinateY1 * coordinateY1;

const distance = Math.sqrt(x + y);

const outputElement = document.querySelector('main');

outputElement.innerText = `Pisteiden välinen etäisyys on ${distance}`;
