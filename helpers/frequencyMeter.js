const same = (arr1, arr2) => { // O(3N) -> O(N)
  if (arr1.length !== arr2.length) {
    return false
  }

  const frequencyCounter1 = {}
  const frequencyCounter2 = {}
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (const key in frequencyCounter1) {
    const powered = key ** 2
    if (!(powered in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// const same = (arr1, arr2) => { O(N^2)
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2)
//     if (correctIndex === -1) {
//       return false
//     }
//     arr2.splice(correctIndex, 1)
//   }
//   return true
// }

console.log(same([1, 2, 3], [4, 1, 9]), true)
console.log(same([1, 2, 3], [1, 9]), false)
console.log(same([1, 2, 1], [4, 4, 1]), false)

module.exports = same
