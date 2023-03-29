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
