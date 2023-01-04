// aka Euclidean algorithm with recursion
const greatestCommonDivisor = (a, b) => b ? greatestCommonDivisor(b, a % b) : a

// in my interpretation
// const greatestCommonDivisor = (m, n) => {
//   let tempM = m
//   let tempN = n

//   if (n > m) {
//     tempM = n
//     tempN = m
//   }

//   let r = tempM % tempN

//   if (r === 0) return tempN

//   do {
//     tempM = tempN
//     tempN = r
//     r = tempM % tempN
//   } while (r > 0)
//   return tempN
// }

console.log(greatestCommonDivisor(462, 910))
console.log(greatestCommonDivisor(15, 50))
console.log(greatestCommonDivisor(100, 50))
console.log(greatestCommonDivisor(1, 2))
