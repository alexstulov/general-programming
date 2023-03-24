const theClockwiseSpiral = (n) => {
  const firstRow = []
  const secondRow = []
  let limit = n
  const total = n * n
  let counter = 1
  /**
     * 11 12 22 21
     * 11 12 13 23 33 32 31 21 22
     * 11 12 13 14 24 34 44 43 42 41 31 21 22 23 33 32
     *
     *
     *
     *
     */
  for (let i = 0; i < limit; i++, counter++) {
    firstRow.push(counter)
  }
  limit--

  for (let i = 0; i < limit; i++) {
    firstRow.push(i + 1)
  }

  console.log(firstRow, limit)
  return [[]]
}

module.exports = theClockwiseSpiral
