const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let binCode = expr;
    let result = '';
    let morseStr = '';
    let temp = '';
    while(binCode !== '') {
        if (binCode[0] === '*') {
            result += ' ';
            binCode = binCode.substr(10, binCode.length);
        }
        for (let i = 0; i < 5; i++) {
            temp = binCode.substr(0, 2);
            binCode = binCode.substr(2, binCode.length);
            if (temp === '10') {
                morseStr += '.';
            } else if (temp === '11') {
                morseStr += '-';
            }
        }
        result += MORSE_TABLE[morseStr];
        morseStr = '';
    }
    return result;
}

module.exports = {
    decode
}
