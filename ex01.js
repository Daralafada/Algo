function calculateAdd(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}

const arr = [10, 15, 3, 7];
const k = 17;
console.log(calculateAdd(arr, k));
