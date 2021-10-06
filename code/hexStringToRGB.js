const hexStringToRGB = hexString => {
    const temp = hexString.substr(1);
    return {
        r: parseInt(temp.substr(0,2), 16),
        g: parseInt(temp.substr(2,2), 16),
        b: parseInt(temp.substr(4,2), 16),
    };
};

module.exports = hexStringToRGB;