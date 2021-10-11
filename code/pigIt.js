const LETTER_REGEX = /[A-Za-z]/;
const NON_LETTER_REGEX = /[^A-Za-z]/;

const convertWord = word => `${word.substr(1)}${word[0]}ay`;

const processSeparator = (sentense, charIndex) => {
    let tempSeparator = '';
    let nextLetter = '';
    for (let j = charIndex; j < sentense.length; j++) {
        tempSeparator+=sentense[j];
        if (sentense[j].match(NON_LETTER_REGEX)) {
            nextLetter = j;
            break;
        }
    }
    return [nextLetter, tempSeparator];
};

const pigIt = sentense => {
    if (!sentense || !sentense.match(LETTER_REGEX)) {
        return sentense;
    }

    let result = '';
    let word = '';

    for (let charIndex = 0; charIndex < sentense.length; charIndex++) {
        if (sentense[charIndex].match(LETTER_REGEX)) {
            word+=sentense[charIndex];
        } else {
            result += word ? convertWord(word) : '';
            word = '';
            const [tempCharIndex, tempSeparator] = processSeparator(sentense, charIndex);
            charIndex = tempCharIndex;
            result += tempSeparator;
        }
    }

    if (word) {
        result += convertWord(word);
    }

    return result;
}

module.exports = pigIt;