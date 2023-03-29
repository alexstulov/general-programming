const removeDublicate = arr => {
  const data = arr.reverse()
  const res = [...new Set(data)]
  return res.reverse()
}

console.log(removeDublicate([3, 4, 4, 3, 6, 3]), [4, 6, 3]) // => [4, 6, 3]
