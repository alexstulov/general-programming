const fib = (n, memo = []) => { // O(N) - reuse previous step result (memo). space complexity goes O(N)
  if (memo[n] !== undefined) {
    return memo[n]
  }
  if (n <= 2) {
    return 1
  }
  const res = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res
  return res
}

// const fib = (n) => { // O(2^N)
//   if (n <= 2) {
//     return 1
//   }
//   return fib(n - 1) + fib(n - 2)
// }

console.log(fib(1), 1)
console.log(fib(10), 55)
console.log(fib(20), 6765)
console.log(fib(40), 102334155)
