function romanToDecimal(romanNumber: string): number {
  let auxiliaryRomanNumber: number = 0;
  let i: number = 0;
  let result: number = 0;
  let convertNumber: number = 0;
  let flag: number = 0;
  while (i !== romanNumber.length) {
    if (romanNumber[i] === `M`) {
      convertNumber = 1000;
    } else if (romanNumber[i] === `D`) {
      convertNumber = 500;
    } else if (romanNumber[i] === `C`) {
      convertNumber = 100;
    } else if (romanNumber[i] === `L`) {
      convertNumber = 50;
    } else if (romanNumber[i] === `X`) {
      convertNumber = 10;
    } else if (romanNumber[i] === `V`) {
      convertNumber = 5;
    } else if (romanNumber[i] === `I`) {
      convertNumber = 1;
    }

    if (i === 0) {
      auxiliaryRomanNumber = convertNumber;
      result = convertNumber;
    }
    if ((auxiliaryRomanNumber < convertNumber) && (i >= 1)) {
      const auxiliaryResult: number = convertNumber - auxiliaryRomanNumber;
      result = result + auxiliaryResult;
    } else if ((auxiliaryRomanNumber > convertNumber) && (i >= 2)) {
      if ((flag != 0) && (i !== (romanNumber.length - 1))) {
        result = result + auxiliaryRomanNumber;
        flag = 0;
      }
      auxiliaryRomanNumber = convertNumber;
      flag++;
      if (i === (romanNumber.length - 1)) {
        result = result + convertNumber;
      }
    } else if ((auxiliaryRomanNumber === convertNumber) && (i >= 1)) {
      result = result + convertNumber;
    }
    if (i == 1) {
      auxiliaryRomanNumber = convertNumber;
    } else if (i > 1) {
      auxiliaryRomanNumber = convertNumber;
    }
    i++;
  }
  return result;
}

function decimalToRoman(decimalNumber: number): string {
  let result: string = ``;
  let auxiliaryResult: string;
  while (decimalNumber != 0) {
    if ((decimalNumber % 1000) === 0) {
      auxiliaryResult = `M`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -1000;
    } else if ((decimalNumber % 500) === 0) {
      auxiliaryResult = `D`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -500;
    } else if ((decimalNumber % 100) === 0) {
      auxiliaryResult = `C`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -100;
    } else if ((decimalNumber % 50) === 0) {
      auxiliaryResult = `L`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -50;
    } else if ((decimalNumber % 10) === 0) {
      auxiliaryResult = `X`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -10;
    } else if ((decimalNumber % 5) === 0) {
      auxiliaryResult = `V`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -5;
    } else if ((decimalNumber % 1) === 0) {
      auxiliaryResult = `I`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -1;
    }
  }
  return result;
}

const decimalResult = romanToDecimal(`MCMXCV`);
// eslint-disable-next-line max-len
console.log(`EL número romano introducido convertido a decimal es ${decimalResult}`);
const romanResult = decimalToRoman(2014);
// eslint-disable-next-line max-len
console.log(`El número decimal introducido convertido a romano es ${romanResult}`);
