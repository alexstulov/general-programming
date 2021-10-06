const replaceOnes = (num) => {
    switch(num) {
        case 0:
            return 'zero';
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
        default:
            return '';
    }
}

const replaceTens = (num) => {
    switch(num) {
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

const numberToEnglish = (num) => {
    const topLimit = 99999;
    if (Number.isNaN(num) || !Number.isInteger(num) || num < 0 || num > topLimit) {
        return '';
    }

    if (num === 0) {
        return 'zero';
    }

    const tenThousands = parseInt(num / 10000);
    const thousands = parseInt((num - tenThousands * 10000) / 1000);
    const thousandTensNThousandOnes = parseInt([tenThousands, thousands].join(''));
    
    const hundreds = parseInt((num - tenThousands * 10000 - thousands * 1000) / 100);
    const tens = parseInt((num - tenThousands * 10000 - thousands * 1000 - hundreds * 100) / 10);
    const ones = num - tenThousands * 10000 - thousands * 1000 - hundreds * 100 - tens * 10;
    
    const thousandTensName = 0 <= thousandTensNThousandOnes && thousandTensNThousandOnes < 20 ? replaceTens(thousandTensNThousandOnes) : replaceTens(tenThousands * 10);
    const thousandOnesName = tenThousands === 0 || thousandTensNThousandOnes > 20 ? replaceOnes(thousands) : '';

    const hundredsName = replaceOnes(hundreds);
    const tensNOnes = parseInt([tens, ones].join(''));
    const tensName = 0 <= tensNOnes && tensNOnes < 20 ? replaceTens(tensNOnes) : replaceTens(tens * 10);
    const onesName = tens === 0 || tensNOnes > 20 ? replaceOnes(ones) : '';

    let numberName = '';
    if (thousandTensName && thousandTensName !== 'zero') {
        numberName += `${thousandTensName} `;
    }
    if (thousandOnesName && thousandOnesName !== 'zero') {
        numberName += `${thousandOnesName} `;
    }
    if (numberName) {
        numberName += 'thousand ';
    }
    if (hundredsName && hundredsName !== 'zero') {
        numberName += `${hundredsName} hundred `;
    }
    if (tensName && tensName !== 'zero') {
        numberName += `${tensName} `;
    }
    if (onesName && onesName !== 'zero') {
        numberName += `${onesName} `;
    }
    return numberName.trim();    
};

module.exports = numberToEnglish;