// La función de arriba está mal, corregir
function decimalToFactorial(decimalNumber: number): string {
  // let factorialRepresentation = 1;
  // while (decimalNumber !== 0) {
  //   factorialRepresentation = factorialRepresentation * decimalNumber;
  //   decimalNumber = decimalNumber - 1;
  // }
  // console.log(`${factorialRepresentation}`);
  // return factorialRepresentation.toString();
  return `0`;
}

function factorialToDecimal(factorialNotation: string): number {
  let i: number = 0;
  let j: number = factorialNotation.length - 1;
  let result: number = 0;
  while (i != factorialNotation.length) {
    const factorialNotationConvert: number = +factorialNotation[i];
    let auxiliaryResult: number = 1;
    for (let k:number = 1; k <= j; k++) {
      auxiliaryResult = auxiliaryResult * k;
    }
    const factorialResult: number = auxiliaryResult * factorialNotationConvert;
    result = result + factorialResult;
    i++;
    j--;
  }
  return result;
}

const decimalToFactorialResult = decimalToFactorial(10);
// eslint-disable-next-line max-len
console.log(`La conversión de decimal a factorial es ${decimalToFactorialResult}`);
const factorialToDecimalResult = factorialToDecimal(`341010`);
// eslint-disable-next-line max-len
console.log(`La conversión de factorial a decimal es ${factorialToDecimalResult}`);
