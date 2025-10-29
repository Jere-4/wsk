function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

const originalArray = [42, 7, 19, 3, 88, 15];

console.log('Original Array:', originalArray);

const sortedArray = sortArray(originalArray);

console.log('Sorted Array:', sortedArray);
