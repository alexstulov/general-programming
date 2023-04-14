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
  isMultipleThreeOrSeven,
  appendNPrependLastThree,
  startsWithJava,
  duplexInRange,
  processScriptSubstring,
  getMax,
  getClosestToHundred,
  twoInRage,
  isCharInRange,
  isLastTwoDigitsSame,
  setFirstThreeCharsCase,
  sumOfTwo,
  isEightRelated,
  compareThreeeNumber
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
  expect(isEightRelated()).toBe(false)
  expect(isEightRelated(8)).toBe(true)
  expect(isEightRelated(0,8)).toBe(true)
  expect(isEightRelated(3,5)).toBe(true)
  expect(isEightRelated(11,3)).toBe(true)
  expect(isEightRelated(2,4)).toBe(false)

  expect(sumOfTwo()).toBe(80)
  expect(sumOfTwo(55)).toBe(65)
  expect(sumOfTwo(55, 10)).toBe(65)
  expect(sumOfTwo(155, 10)).toBe(80)
  expect(sumOfTwo(5, 10)).toBe(80)

  expect(isLastTwoDigitsSame()).toBe(true)
  expect(isLastTwoDigitsSame('')).toBe(true)
  expect(isLastTwoDigitsSame(100)).toBe(true)
  expect(isLastTwoDigitsSame(100, 200)).toBe(true)
  expect(isLastTwoDigitsSame(100, 200, 300)).toBe(true)
  expect(isLastTwoDigitsSame('10')).toBe(true)
  expect(isLastTwoDigitsSame(10.123)).toBe(false)
  
  expect(twoInRage()).toBe(false)
  expect(twoInRage(10)).toBe(false)
  expect(twoInRage(40)).toBe(false)
  expect(twoInRage(0, 40)).toBe(false)
  expect(twoInRage(40, 40)).toBe(true)
  expect(twoInRage(40, 60)).toBe(true)
  expect(twoInRage(40, 80)).toBe(true)
  expect(twoInRage(70, 55)).toBe(true)
  expect(twoInRage(40, 101)).toBe(false)
  expect(twoInRage(101, 71)).toBe(false)

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

  expect(duplexInRange()).toBe(false)
  expect(duplexInRange(1)).toBe(false)
  expect(duplexInRange(1, 2)).toBe(false)
  expect(duplexInRange(50)).toBe(true)
  expect(duplexInRange(50, 1)).toBe(true)
  expect(duplexInRange(70, 1)).toBe(true)
  expect(duplexInRange(99, 1)).toBe(true)
  expect(duplexInRange(1, 50)).toBe(true)
  expect(duplexInRange(1, 70)).toBe(true)
  expect(duplexInRange(1, 99)).toBe(true)

  expect(() => getMax()).toThrow('Provide correct numbers')
  expect(getMax(1)).toBe(1)
  expect(getMax(1,2,3)).toBe(3)
  expect(getMax(1000000, 1000, 10)).toBe(1000000)
  expect(getMax(10, Infinity, 100)).toBe(Infinity)

  expect(getClosestToHundred()).toBe(0)
  expect(getClosestToHundred(100)).toBe(100)
  expect(getClosestToHundred(0, 100)).toBe(100)
  expect(getClosestToHundred(80, 120)).toBe(80)
  expect(getClosestToHundred(10, 20)).toBe(20)

  expect(compareThreeeNumber()).toBe(30)
  expect(compareThreeeNumber(1,2,3)).toBe(20)
  expect(compareThreeeNumber(1,2,2)).toBe(40)
  expect(compareThreeeNumber(1,1,2)).toBe(40)
  expect(compareThreeeNumber(1,1,1)).toBe(30)
})

test('String practice', () => {
  expect(setFirstThreeCharsCase()).toBe('tesT')
  expect(setFirstThreeCharsCase('a')).toBe('A')
  expect(setFirstThreeCharsCase('TeStIt')).toBe('testIt')
  expect(setFirstThreeCharsCase(123)).toBe('123')

  expect(isCharInRange()).toBe(false)
  expect(isCharInRange('azaza')).toBe(true)
  expect(isCharInRange('check it again')).toBe(false)
  expect(isCharInRange('check it again','b')).toBe(false)
  expect(isCharInRange('check it again','test')).toBe(false)
  expect(isCharInRange('check it again','c')).toBe(true)

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

  expect(appendNPrependLastThree()).toBe('abcabcabc')
  expect(() => appendNPrependLastThree('a')).toThrow('str.length should be >= 3')
  expect(() => appendNPrependLastThree('ab')).toThrow('str.length should be >= 3')
  expect(appendNPrependLastThree('test')).toBe('esttestest')
  
  expect(startsWithJava()).toBe(true)
  expect(startsWithJava('testttt')).toBe(false)
  expect(startsWithJava('')).toBe(false)
  expect(startsWithJava('Java')).toBe(true)
  expect(startsWithJava('JavaScript')).toBe(true)
  expect(startsWithJava('Java programming language')).toBe(true)

  expect(processScriptSubstring()).toBe('Script')
  expect(processScriptSubstring('testScriptTest')).toBe('testTest')
  expect(processScriptSubstring('testScript')).toBe('test')
  expect(processScriptSubstring('    Script___')).toBe('    ___')
})

test('Browser API and stuff', () => {
  expect(getURL()).toBe('http://localhost/')
  expect(makeVar('asdf')).toBe('Variable with user\'s name')
})
