function search (arr, val) { // O(log N) - binary search
  let min = 0
  let max = arr.length - 1
  let middle = 0
  while (min <= max) {
    middle = Math.floor((min + max) / 2)
    if (arr[middle] < val) {
      min = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

// function search (arr, val) { // O(N)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i
//     }
//   }
//   return -1
// }

console.log(search([1, 2, 3, 4, 5, 6], 4), 3)
console.log(search([1, 2, 3, 4, 5, 6], 6), 5)
console.log(search([1, 2, 3, 4, 5, 6], 11), -1)
