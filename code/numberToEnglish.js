const replaceOnes = num => {
    switch (num) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 0:
        default:
            return '';
    }
}

const replaceTens = num => {
    switch (num) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
        case 20:
            return 'twenty';
        case 30:
            return 'thirty';
        case 40:
            return 'forty';
        case 50:
            return 'fifty';
        case 60:
            return 'sixty';
        case 70:
            return 'seventy';
        case 80:
            return 'eighty';
        case 90:
            return 'ninety';
        default:
            return '';
    }
}

const convertTens = num => {
    if (num < 10) {
        return replaceOnes(num);
    } else if (num < 20) {
        return replaceTens(num);
    } else {
        const tempNum = num.toString()
        return `${replaceTens(parseInt(tempNum[0]+'0'))} ${replaceOnes(parseInt(tempNum[1]))}`.trim();
    }
}

const numberToEnglish = num => {
    if (Number.isNaN(num) || !Number.isInteger(num) || num < 0 || num > 99999) {
        return '';
    }

    if (num === 0) {
        return 'zero';
    }

    let stringNum = num.toString();
    while (stringNum.length < 5) {
        stringNum = `0${stringNum}`;
    }

    const thousands = convertTens(parseInt(stringNum.substr(0,2)));
    const hundreds = replaceOnes(parseInt(stringNum.substr(2,1)));
    const tens = convertTens(parseInt(stringNum.substr(3,2)));

    let result = '';
    if (thousands) {
        result += `${thousands} thousand `;
    }
    if (hundreds) {
        result += `${hundreds} hundred `;
    }
    if (tens) {
        result += tens;
    }
    
    return result.trim();
}

module.exports = numberToEnglish;