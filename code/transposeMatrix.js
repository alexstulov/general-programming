const matrixGenerator = require('../helpers/generateMatrix')

const transpose = matrix => {
  const height = matrix.length
  const length = matrix[0].length
  const transposed = matrixGenerator(length, height)

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }

  return transposed
}

console.log(transpose([[1]]), 'to be', [[1]])
console.log(transpose([[1, 2, 3], [4, 5, 6]]), 'to be', [[1, 4], [2, 5], [3, 6]])
console.log(transpose([[1, 4], [2, 5], [3, 6]]), 'to be', [[1, 2, 3], [4, 5, 6]])
