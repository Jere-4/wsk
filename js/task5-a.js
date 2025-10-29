function sortArray(numbers, order) {
  const sorted = numbers.slice();

  if (order === 'asc') {
    sorted.sort((a, b) => a - b);
  } else if (order === 'desc') {
    sorted.sort((a, b) => b - a);
  } else {
    console.error("Invalid sort order. Use 'asc' or 'desc'.");
    return [];
  }

  return sorted;
}

const numbers1 = [5, 2, 8, 1, 9];
const numbers2 = [10, 3, 7, 6, 4];

console.log('Original Array:', numbers1);
console.log('Sorted Ascending:', sortArray(numbers1, 'asc'));
console.log('Sorted Descending:', sortArray(numbers1, 'desc'));

console.log('Original Array:', numbers2);
console.log('Sorted Ascending:', sortArray(numbers2, 'asc'));
console.log('Sorted Descending:', sortArray(numbers2, 'desc'));
