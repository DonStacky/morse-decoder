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
    let word = [];
    let arr = [];
    let sentence = '';
    for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
    }
    arr.map(function(item, index, array) {
      let arrNum = [];
      let arrDot = [];
      let str = '';
      for (let i = 0; i < 10; i += 2) {
        arrNum.push(item.slice(i, i+2));
      }
      arrDot = arrNum.reduce((acc, value) => {
        if (value === '00') {
          return acc;
        } else if (value === '10') {
          return acc = [...acc, '.']
        } else if (value === '11') {
          return acc = [...acc, '-']
        } else if (value === '**') {
          return acc = [' ']
        }
      }, acc = [])
      str = arrDot.join('');
      word.push(str);
    })
    for (letter of word) {
      if (letter === ' ') {
        sentence = sentence + ' ';
      } else {
    for (let key in MORSE_TABLE) {
      if (key === letter) {
        sentence = sentence + MORSE_TABLE[key];
      }
    }}
    }
    return sentence;
}

module.exports = {
    decode
}