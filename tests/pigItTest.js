const pigIt = require('../code/pigIt');
const assertEquals = require('./assertEquals');

/**
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript 
 * 
 * Simple Pig Latin
 * 
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * 
 * */
const pigItTest = () => {
    assertEquals(pigIt('Pig latin is cool ! '), 'igPay atinlay siay oolcay ! ');
    assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay');
};

module.exports = pigItTest;