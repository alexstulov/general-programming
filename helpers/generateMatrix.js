function matrix (m, n) {
  return Array.from({
    // generate array of length m
    length: m
    // inside map function generate array of size n
    // and fill it with `0`
  }, () => new Array(n).fill(0))
};

module.exports = matrix
