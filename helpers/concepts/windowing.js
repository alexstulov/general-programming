function maxSubarraySum (arr, num) { // O (N)
  if (num > arr.length) {
    return null
  }
  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// function maxSubarraySum (arr, num) { // O (N^2)
//   if (num > arr.length) {
//     return null
//   }
//   let max = -Infinity
//   let temp
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j]
//     }
//     if (temp > max) {
//       max = temp
//     }
//   }
//   return max
// }

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17)
console.log(maxSubarraySum([4, 2, 1, 6], 1), 6)
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4), 13)
console.log(maxSubarraySum([], 4), null)
