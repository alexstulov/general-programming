const pigIt = require('../code/pigIt');

test('Pig Latin Works!', () => {
  expect(pigIt('Pig latin is cool ! ')).toBe('igPay atinlay siay oolcay ! ');
  expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay');
});