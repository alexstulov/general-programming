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
  makeVar
}
