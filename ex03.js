function calculateAdd(arr, k) {
  let soustraction = {};
  for (let i = 0; i < arr.length; i++) {
    let result = k - arr[i];
    if (result in soustraction) {
      return true;
    }
  soustraction[arr[i]] = true;
  }
  return false;
}

const arr = [10, 15, 3, 7];
const k = 17
console.log(calculateAdd(arr, k))
