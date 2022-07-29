const assertEquals = (a, b) => {
    const successColor = "\x1b[32m";
    const errorColor = "\x1b[31m";
    if (a === b) {
        console.log(successColor, `${a} is equal to ${b}`);
    } else {
        console.log(errorColor, `${a} is not equal to ${b}`);
    }
};

module.exports = assertEquals;