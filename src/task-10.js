
export default function convertToRoman(n) {
    let numCodes = [['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM']]
    let romNum = ''
    let digits = n.toString().split('').reverse()
    for (let i = 0; i < digits.length; i++) {
        romNum = numCodes[i][parseInt(digits[i])] + romNum
    }
    return romNum
}