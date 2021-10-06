const path = require('path');
const hexStringToRGB = require('../code/hexStringToRGB');

const shallowEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let result = true;
  if (keys1.length !== keys2.length) {
    result = false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      result = false;
    }
  }

  const successColor = "\x1b[32m";
  const errorColor = "\x1b[31m";
  if (result) {
    console.log(successColor, `${path.relative('./', 'hexStringToRGB.js: ')}${JSON.stringify(object1)} is shallow equal to ${JSON.stringify(object2)}`);
  } else {
    console.log(errorColor, `${JSON.stringify(object1)} is not shallow equal to ${JSON.stringify(object2)}`);
  }
}

const hexStringToRGBTest = function () {
  shallowEqual(hexStringToRGB("#FF9933"), { r: 255, g: 153, b: 51 });
}

module.exports = hexStringToRGBTest;