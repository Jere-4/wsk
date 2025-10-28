const points = prompt('Anna saamasi pistemäärä:');

if (0 <= points && points <= 39) {
  score = 0;
} else if (40 <= points && points <= 51) {
  score = 1;
} else if (52 <= points && points <= 63) {
  score = 2;
} else if (64 <= points && points <= 75) {
  score = 3;
} else if (76 <= points && points <= 87) {
  score = 4;
} else if (88 <= points && points <= 100) {
  score = 5;
}

const outputElement = document.querySelector('main');

outputElement.innerText = `Sait arvosanan ${score}`;
