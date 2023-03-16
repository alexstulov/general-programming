// write function like add(2,5), add(2)(5)
// const add = (a, ...rest) => b => a + b + rest.reduce((sum, r) => sum + r, 0)
// and ad(1,2,3,4,5), add(1,2)(3)(4,5), add(1,2)(3,4,5) - there are always 5 args
// const addExtended = (a1, ...rest1) => (a2, ...rest2) => (a3, ...rest3) => (a4, ...rest4) => (a5, ...rest5) => [a1, ...rest1, a2, ...rest2, a3, ...rest3, a4, ...rest4, a5, ...rest5].reduce((s, a) => s + a, 0)
// console.log(add(2, 5), add(2)(5), 7)

// write function like diff([1,2,3], [3,4,5]) = [1,2]. Elements in A, but not in B
// const diff = (arr1, arr2) => arr1.map(a => arr2.includes(a) ? null : a).filter(a => a !== null)
// console.log(diff([1, 2, 3], [3, 4, 5]), [1, 2])

// write function to generate array of functions. each return it's index in array. let arr = createFunctions(5) arr[0]() => 0, arr[3]() => 3
const createFunctions = (n) => {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(function () {
      return i
    })
  }
  return arr
}
const arr = createFunctions(5)
console.log(arr[0](), 0)
console.log(arr[3](), 3)
