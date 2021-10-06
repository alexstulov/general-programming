const numberToEnglish = require('../code/numberToEnglish');
const assertEquals = require('./assertEquals');

const numberToEnglishTest = function() {
    assertEquals(numberToEnglish('test'), '');
    assertEquals(numberToEnglish(95.99), '');
    assertEquals(numberToEnglish(-4), '');
    assertEquals(numberToEnglish(0), 'zero');
    assertEquals(numberToEnglish(7), 'seven');
    assertEquals(numberToEnglish(11), 'eleven');
    assertEquals(numberToEnglish(15), 'fifteen');
    assertEquals(numberToEnglish(20), 'twenty');
    assertEquals(numberToEnglish(47), 'forty seven');
    assertEquals(numberToEnglish(100), 'one hundred');
    assertEquals(numberToEnglish(305), 'three hundred five');
    assertEquals(numberToEnglish(4002), 'four thousand two');
    assertEquals(numberToEnglish(3892), 'three thousand eight hundred ninety two');
    assertEquals(numberToEnglish(6800), 'six thousand eight hundred');
    assertEquals(numberToEnglish(14111), 'fourteen thousand one hundred eleven');
    assertEquals(numberToEnglish(20005), 'twenty thousand five');
    assertEquals(numberToEnglish(99999), 'ninety nine thousand nine hundred ninety nine');
}

module.exports = numberToEnglishTest;