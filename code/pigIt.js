const convertWord = word => `${word.substr(1)}${word[0]}ay`;

const processSeparator = (str, i) => {
    let tempSeparator = '';
    for (let j = i; j < str.length; j++) {
        tempSeparator+=str[j];
        if (str[j].match(/[^A-Za-z]/)) {
            i = j;
            break;
        }
    }
    return [i, tempSeparator];
};

const pigIt = str => {
    if (!str || !str.match(/[A-Za-z]/)) {
        return str;
    }

    let result = '';
    let tempText = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Za-z]/)) {
            tempText+=str[i];
        } else {
            result += tempText ? convertWord(tempText) : '';
            tempText = '';
            let [tempI, tempSeparator] = processSeparator(str, i);
            i = tempI;
            result += tempSeparator;
        }
    }

    if (tempText) {
        result += convertWord(tempText);
    }

    return result;
}

module.exports = pigIt;