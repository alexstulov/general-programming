/**
 * @jest-environment jsdom
 */
const {
  getCurrentDateNTime,
  triangleAreaBySides,
  isLeap,
  isFirstJanuaryOnSunday,
  guessNumber,
  howLongTillNextEightMarch,
  multiplyNDivide,
  celsiusToFahrenheitNBack,
  getURL,
  makeVar
} = require('../code/js-basic-exercises.js')

test('Date and time practice', () => {
  console.log = jest.fn()
  getCurrentDateNTime()
  expect(console.log.mock.calls[0][0]).toMatch(new RegExp('Today is: .*'))
  expect(console.log.mock.calls[0][1]).toMatch(new RegExp('Current time is: .*'))

  expect(isLeap(2023)).toBe(false)
  expect(isLeap(2022)).toBe(false)
  expect(isLeap(2021)).toBe(false)
  expect(isLeap(2020)).toBe(true)
  expect(isLeap(2019)).toBe(false)

  expect(isFirstJanuaryOnSunday(2015)).toBe(false)
  expect(isFirstJanuaryOnSunday(2016)).toBe(false)
  expect(isFirstJanuaryOnSunday(2017)).toBe(true)
  expect(isFirstJanuaryOnSunday(2018)).toBe(false)
  expect(isFirstJanuaryOnSunday(2020)).toBe(false)

  expect(howLongTillNextEightMarch(2020)).toBe(68)
  expect(howLongTillNextEightMarch(2022)).toBe(67)
  expect(howLongTillNextEightMarch(2023)).toBe(67)
  expect(howLongTillNextEightMarch(2024)).toBe(68)
  expect(howLongTillNextEightMarch(2025)).toBe(67)
})

test('Math practice', () => {
  expect(triangleAreaBySides().toFixed(1)).toBe('14.7')
  expect(triangleAreaBySides(2, 3, 4).toFixed(1)).toBe('2.9')

  jest.spyOn(Math, 'random').mockReturnValue(1)
  expect(guessNumber(5)).toBe('Not matched')
  expect(guessNumber(6)).toBe('Not matched')
  expect(guessNumber(7)).toBe('Not matched')
  expect(guessNumber(10)).toBe('Good work')

  expect(multiplyNDivide(10, 100)).toContain(1000)
  expect(multiplyNDivide(10, 0)).toContain(0)
  expect(multiplyNDivide(0, 100)).toContain(0)
  expect(multiplyNDivide()).toContain(1)
  expect(multiplyNDivide('a', 'b')).toContain(1)

  expect(celsiusToFahrenheitNBack(60)).toBe(140)
  expect(celsiusToFahrenheitNBack(45, 'F')).toBe(7.222222222222222)
})

test('Browser API and stuff', () => {
  expect(getURL()).toBe('http://localhost/')
  expect(makeVar('asdf')).toBe('Variable with user\'s name')
})
