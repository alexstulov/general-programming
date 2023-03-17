const bracketsPairs = {
  '[': ']',
  '{': '}',
  '(': ')',
  '<': '>'
}
const bracketsPairsMirrored = {
  ']': '[',
  '}': '{',
  ')': '(',
  '>': '<'
}

const balanceBrackets = input => {
  const stack = []

  for (const bracket of input.split('')) {
    if (Object.keys(bracketsPairs).includes(bracket)) {
      stack.push(bracket)
    } else if (
      Object.values(bracketsPairs).includes(bracket) &&
      stack[stack.length - 1] === bracketsPairsMirrored[bracket]) {
      stack.pop()
    } else {
      return false
    }
  }
  if (stack.length) {
    return false
  }
  return true
}

module.exports = balanceBrackets
