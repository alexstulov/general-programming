const numberToEnglish = require('../code/numberToEnglish');

test('Number to English Works!', () => {
    expect(numberToEnglish(0)).toBe('zero');
    expect(numberToEnglish()).toBe('');
    expect(numberToEnglish(0)).toBe('zero');
    expect(numberToEnglish(7)).toBe('seven');
    expect(numberToEnglish(11)).toBe('eleven');
    expect(numberToEnglish(15)).toBe('fifteen');
    expect(numberToEnglish(20)).toBe('twenty');
    expect(numberToEnglish(47)).toBe('forty seven');
    expect(numberToEnglish(100)).toBe('one hundred');
    expect(numberToEnglish(305)).toBe('three hundred five');
    expect(numberToEnglish(4002)).toBe('four thousand two');
    expect(numberToEnglish(3892)).toBe('three thousand eight hundred ninety two');
    expect(numberToEnglish(6800)).toBe('six thousand eight hundred');
    expect(numberToEnglish(14111)).toBe('fourteen thousand one hundred eleven');
    expect(numberToEnglish(20005)).toBe('twenty thousand five');
    expect(numberToEnglish(99999)).toBe('ninety nine thousand nine hundred ninety nine');
  });