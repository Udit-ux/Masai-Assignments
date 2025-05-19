// Method 1: Filter Even Numbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Method 2: Sum of Array
function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Method 3: Sort and Concat
function sortAndConcat(arr1, arr2) {
  const sorted1 = arr1.slice().sort((a, b) => a - b);
  const sorted2 = arr2.slice().sort((a, b) => a - b);
  return sorted1.concat(sorted2);
}

// Example input arrays
const array1 = [5, 12, 7, 6];
const array2 = [9, 4, 10, 2];

// Using the methods
const evenNumbers1 = filterEvenNumbers(array1);
const evenNumbers2 = filterEvenNumbers(array2);

const sum1 = sumOfArray(array1);
const sum2 = sumOfArray(array2);

const combinedSorted = sortAndConcat(array1, array2);

// Output the results
console.log("Even numbers from array1:", evenNumbers1);
console.log("Even numbers from array2:", evenNumbers2);
console.log("Sum of array1:", sum1);
console.log("Sum of array
