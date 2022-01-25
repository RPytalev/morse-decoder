function decode(expr) {
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
    
    let arr = expr.split('');
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let obj = MORSE_TABLE;
    let objX = {};
    let str = '';

    for (let i = 0; i < arr.length / 10; i++) {
        let n = i;
        n = n * 10;
        arr2.push(arr.slice(n, n + 10));
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].includes('*')) {
            objX[i] = arr2[i];
        } else {
            objX[i] = arr2[i].slice(arr2[i].findIndex(item => item == '1'));
        } 
    }
    objX = Object.entries(objX).map(([key, value]) => [key, value = decoder(value)]);

    function decoder(value) {
        let a = 0;
        let b = 1;

        for (let i = 0; i < value.length / 2; i++) {
            if (value[i] == '*') {
                value[i];
            } else {
                value[i] = value[a] + value[b];
            }
            a = a + 2;
            b = b + 2;
        }
        return value;
    }

    objX = Object.entries(objX).map(([key, value]) => [key, value = decoder2(value)]);

    function decoder2(value) {
        if (value[1].includes('*')) {
            value[1];
        } else {
            value[1] = value[1].slice(0, value[1].length / 2);
        }
        return value;
    }

    objX = Object.entries(objX).map(([key, value]) => [key, value = decoder3(value)]);

    function decoder3(value) {
        for (let i = 0; i < value[1][1].length; i++) {
            if (value[1][1][i] == '10') {
                value[1][1][i] = '.';
                
            } else if (value[1][1][i] == '11') {
                value[1][1][i] = '-';
            } else {
                value[1][1][i];
            }
        }
        return value;
    }
    
    objX = Object.entries(objX).map(([key, value]) => [key, value = decoder4(value)]);

    function decoder4(value) {
        for (let i = 0; i < value[1][1].length / 2; i++) {
            arr3.push(value[1][1][1]);
        }
    }
    arr3.forEach(element => {
        arr1.push(element.join(''));
    });

    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] == '**********') {
            arr4.push(' ');
        } else {
            for (let key in obj) {
                if (arr1[i] == key) {
                    arr4.push(obj[key]);
                }
            }
        }
    }
    str = arr4.join('');
    return str;
}

module.exports = {
    decode
}
