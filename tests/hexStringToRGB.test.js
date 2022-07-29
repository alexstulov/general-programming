const hexStringToRGB = require('../code/hexStringToRGB');

test('HEX -> RGB Works!', () => {
  expect(hexStringToRGB("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
});