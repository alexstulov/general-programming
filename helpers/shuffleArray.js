// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

const shuffleArray = data => {
    let temp = [...data]
    for (i = temp.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = temp[i]
        temp[i] = temp[j]
        temp[j] = k
      }
      return temp
}

module.exports = shuffleArray