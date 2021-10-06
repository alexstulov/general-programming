const pigIt = require('../code/pigIt');
const assertEquals = require('./assertEquals');

const pigItTest = () => {
    assertEquals(pigIt('Pig latin is cool ! '), 'igPay atinlay siay oolcay ! ');
    assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay');
};

module.exports = pigItTest;