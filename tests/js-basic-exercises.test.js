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
  isMultipleThreeOrSeven
} = require('../code/js-basic-exercises.js')

test('Date and time practice', () => {
  console.log = jest.fn()
  getCurrentDateNTime()
  expect(console.log.mock.calls[0][0]).toMatch(/Today is: .*/i)
  expect(console.log.mock.calls[0][1]).toMatch(/Current time is: .*/)

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

  expect(getDiffWithThirteen(0)).toBe(-13)
  expect(getDiffWithThirteen(12)).toBe(-1)
  expect(getDiffWithThirteen(13)).toBe(0)
  expect(getDiffWithThirteen(14)).toBe(2)
  expect(getDiffWithThirteen(100)).toBe(174)

  expect(sumNumbers()).toBe(0)
  expect(sumNumbers(1, 2)).toBe(3)
  expect(sumNumbers(5, 5)).toBe(30)
  expect(sumNumbers(6, 6)).toBe(36)
  expect(sumNumbers(56)).toBe(56)

  expect(absDifference()).toBe(19)
  expect(absDifference(5)).toBe(14)
  expect(absDifference(50)).toBe(93)

  expect(isFifty()).toBe(false)
  expect(isFifty(5, 10)).toBe(false)
  expect(isFifty(50, 10)).toBe(true)
  expect(isFifty(5, 50)).toBe(true)
  expect(isFifty(5, 45)).toBe(true)

  expect(isWithinRange()).toBe(false)
  expect(isWithinRange(10)).toBe(false)
  expect(isWithinRange(20)).toBe(true)
  expect(isWithinRange(50)).toBe(true)
  expect(isWithinRange(100)).toBe(true)
  expect(isWithinRange(250)).toBe(false)
  expect(isWithinRange(400)).toBe(true)

  expect(arePositiveAndNegative()).toBe(false)
  expect(arePositiveAndNegative(0)).toBe(false)
  expect(arePositiveAndNegative(10)).toBe(false)
  expect(arePositiveAndNegative(-10)).toBe(false)
  expect(arePositiveAndNegative(-10, 100)).toBe(true)
  expect(arePositiveAndNegative(10, -100)).toBe(true)
  expect(arePositiveAndNegative(-10, -100)).toBe(false)
  expect(arePositiveAndNegative(10, 100)).toBe(false)

  expect(isMultipleThreeOrSeven()).toBe(true)
  expect(isMultipleThreeOrSeven(3)).toBe(true)
  expect(isMultipleThreeOrSeven(7)).toBe(true)
  expect(isMultipleThreeOrSeven(21)).toBe(true)
  expect(isMultipleThreeOrSeven(2)).toBe(false)
  expect(isMultipleThreeOrSeven(4)).toBe(false)
  expect(isMultipleThreeOrSeven(5)).toBe(false)
})

test('String practice', () => {
  expect(getFileExtension('test.exe')).toBe('exe')
  expect(getFileExtension('_.rar')).toBe('rar')
  expect(getFileExtension('.doc')).toBe('Invalid file name')
  expect(getFileExtension('asdf.')).toBe('Invalid file name')
  expect(getFileExtension('qwer')).toBe('Invalid file name')
  expect(getFileExtension('')).toBe('Invalid file name')

  expect(checkPy('')).toBe('Py')
  expect(checkPy('Python')).toBe('Python')
  expect(checkPy('pyramid')).toBe('pyramid')
  expect(checkPy('Pyjamas')).toBe('Pyjamas')
  expect(checkPy('some string')).toBe('Pysome string')

  expect(dropChar('test', 2)).toBe('tet')
  expect(dropChar('', 2)).toBe('')
  expect(dropChar('aaaaa', 5)).toBe('aaaaa')
  expect(dropChar('aaaaa', 3)).toBe('aaaa')

  expect(() => { switchFirstNLast('') }).toThrow('str.length should be > 1')
  expect(switchFirstNLast('a')).toBe('a')
  expect(switchFirstNLast('ab')).toBe('ba')
  expect(switchFirstNLast('abc')).toBe('cba')
  expect(switchFirstNLast('test')).toBe('test')
})

test('Browser API and stuff', () => {
  expect(getURL()).toBe('http://localhost/')
  expect(makeVar('asdf')).toBe('Variable with user\'s name')
})
