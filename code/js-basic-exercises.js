/** No googling training with basic tasks from
 * https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php */

const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const getCurrentDateNTime = () => {
  const date = new Date()
  let hours = date.getHours()
  if (hours > 12) {
    hours = (hours - 12) + ' PM'
  } else {
    hours = hours + ' AM'
  }

  console.log(
  `Today is: ${weekDay[date.getUTCDay() - 1]}`,
  `Current time is: ${hours} : ${date.getMinutes()} : ${date.getSeconds()}`)
}

const triangleAreaBySides = (a = 5, b = 6, c = 7) => {
  const semiPerimeter = (a + b + c) / 2
  return Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
}

const chainTheString = (initialWord = 'w3resource') => {
  let word = initialWord
  const timer = setInterval(() => {
    const lettersArr = word.split('')
    const lastLetter = lettersArr.shift()
    lettersArr.push(lastLetter)
    word = lettersArr.join('')
    console.log(lettersArr.join(''))
    if (word === initialWord) {
      clearInterval(timer)
    }
  }, 1000)
}

const isLeap = year => {
  const date = new Date(`02/29/${year} 15:00:00`)
  return date.getDate() === 29
}

const isFirstJanuaryOnSunday = (year) => {
  const date = new Date(`01/29/${year} 15:00:00`)
  const weekD = date.getDay()
  return weekD === 0
}

// const isFirstJanuaryOnSundayLoop = () => {
//   for (let i = 2014; i < 2050; i++) {
//     if (isFirstJanuaryOnSunday(i)) {
//       console.log(`1 Jan of ${i} is: Sunday`)
//     }
//   }
// }
// console.log(isFirstJanuaryOnSundayLoop())

const getRandomTen = () => Math.ceil(Math.random() * 10)

const guessNumber = input => input === getRandomTen() ? 'Good work' : 'Not matched'

const howLongTillNextEightMarch = (year) => {
  const date = new Date(`01/01/${year}`)

  const eightMarchThisYearDate = new Date(`03/08/${date.getFullYear()} 09:00:00`)
  const eightMarchNextYearDate = new Date(`03/08/${date.getFullYear() + 1} 09:00:00`)

  const currentTs = date.getTime()
  const eightMarchThisYearTs = eightMarchThisYearDate.getTime()
  const eightMarchNextYearTs = eightMarchNextYearDate.getTime()

  let msTillNext = 0
  if (currentTs > eightMarchThisYearTs) {
    msTillNext = eightMarchNextYearTs - currentTs
  } else if (currentTs < eightMarchThisYearTs) {
    msTillNext = eightMarchThisYearTs - currentTs
  } else {
    return 0
  }

  return Math.ceil(msTillNext / 1000 / 60 / 60 / 24)
}

const multiplyNDivide = (a = 1, b = 1) => {
  if (isNaN(a)) {
    a = 1
  }
  if (isNaN(b)) {
    b = 1
  }
  const m = a * b
  const d = a / b
  return [m, d]
}

const celsiusToFahrenheitNBack = (a, unit = 'C') => unit === 'C' ? a * 9 / 5 + 32 : (a - 32) / 9 * 5

const getURL = () => window ? window.location.href : 'No op to get URL'

const makeVar = name => {
  window[name] = 'Variable with user\'s name'
  return window[name]
}

const getFileExtension = fileName => {
  const blocks = fileName.split('.')
  const extension = blocks.pop()
  if (extension.length < 2 || blocks.length === 0 || !blocks[0].length) {
    return 'Invalid file name'
  }

  return extension
}

const getDiffWithThirteen = num => {
  return num > 13 ? Math.abs(num - 13) * 2 : num - 13
}

const sumNumbers = (num1 = 0, num2 = 0) => num1 === num2 ? num1 * 6 : num1 + num2

const ABS_DIFF_NUM = 19
const absDifference = (num = 0) => num > ABS_DIFF_NUM ? Math.abs(num - ABS_DIFF_NUM) * 3 : Math.abs(num - ABS_DIFF_NUM)

const isFifty = (num1 = 0, num2 = 0) => (num1 === 50 || num2 === 50 || num1 + num2 === 50)

const isWithinRange = (num = 0) => ((num >= 20 && num <= 100) || num === 400)

const arePositiveAndNegative = (num1 = 0, num2 = 0) => ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0))

const checkPy = (str = '') => str.substring(0, 2).toLowerCase() === 'py' ? str : `Py${str}`

const dropChar = (str = '', i = 0) => {
  if (str.length < i + 1) return str
  return str.substring(0, i) + str.substring(i + 1)
}

const switchFirstNLast = (str = 'a') => {
  if (!str) throw new Error('str.length should be > 1')
  if (str.length === 1) return str
  if (str.length === 2) return str[1] + str[0]
  return str[str.length - 1] + str.substring(1, str.length - 1) + str[0]
}

const isMultipleThreeOrSeven = (num = 0) => (num % 3 === 0 || num % 7 === 0)

const appendNPrependLastThree = (str = 'abc') => {
  if (str.length < 3) throw new Error('str.length should be >= 3')
  const firstThree = str.substring(str.length - 3, str.length)
  return firstThree + str + firstThree
}

const startsWithJava = (str = 'Java') => str.substring(0, 4) === 'Java'

const duplexInRange = (a = 0, b = 0) => (a >=50 && a <=99) || (b >=50 && b <=99)

const processScriptSubstring = (str = 'Script') => {
  if (str.substring(4, 10) === 'Script') {
    return str.substring(0, 4) + str.substring(10)
  }
  return str
}

const getMax = (...args) => {
  if (!args.length) throw new Error('Provide correct numbers')
  let max = -Infinity;
  for (let i=0; i< args.length; i++) {
    max = args[i]>max ? args[i] : max
  }
  return max
}

const getClosestToHundred = (a = 0, b = 0) => {
  const diffA = Math.abs(100 - a)
  const diffB = Math.abs(100 - b)

  return diffA < diffB ? a : diffA === diffB ? Math.min(a, b) : b
}

const twoInRage = (a= 0, b=0) => {
  const FORTY = 40, SIXTY = 60, SEVENTY = 70, HUNDRED = 100
  let res = 0;
  if ((a >= FORTY && a <= SIXTY) || (a >= SEVENTY && a <= HUNDRED)) {
    res++;
  }
  if ((b >= FORTY && b <= SIXTY) || (b >= SEVENTY && b <= HUNDRED)) {
    res++;
  }

  return res === 2
}

//Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
const isCharInRange = (str = 'testIt', char = 'a') => str[2] === char || str[3] === char || str[4] === char

module.exports = {
  getCurrentDateNTime,
  triangleAreaBySides,
  chainTheString,
  isLeap,
  isFirstJanuaryOnSunday,
  guessNumber,
  howLongTillNextEightMarch,
  multiplyNDivide,
  celsiusToFahrenheitNBack,
  getURL,
  makeVar,
  getFileExtension,
  getDiffWithThirteen,
  sumNumbers,
  absDifference,
  isFifty,
  isWithinRange,
  arePositiveAndNegative,
  checkPy,
  dropChar,
  switchFirstNLast,
  isMultipleThreeOrSeven,
  appendNPrependLastThree,
  startsWithJava,
  duplexInRange,
  processScriptSubstring,
  getMax,
  getClosestToHundred,
  twoInRage,
  isCharInRange
}
