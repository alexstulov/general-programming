const convertHexToDec = hex => parseInt(hex, 16);

const hexStringToRGB = hexString => {
    const [,r1,r2,g1,g2,b1,b2] = hexString;
    return {
        r: convertHexToDec(r1+r2),
        g: convertHexToDec(g1+g2),
        b: convertHexToDec(b1+b2),
    };
};

module.exports = hexStringToRGB;