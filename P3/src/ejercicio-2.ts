/**
 * This function transform a decimal number into a factorial notaion.
 * @param decimalNumber Consists in the decimal number that is wanna
 * be transformed.
 * @returns A string that is the factorial notation.
 * **Example to test the program:**
 * ```
 * decimalNumber = 463; // Start
 * decimalToFactorialResult = `341010`; // Result
 * ```
 */
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
/**
 * This function transform a factorial notation number into a decimal number.
 * @param factorialNotation Consists in the factorial notation number.
 * @returns A number that is the decimal number of the factorial notation.
 * **Example to test the program:**
 * ```
 * factorialNotation = `341010`; // Start
 * factorialToDecimalResult = 463; // Result
 * ```
 */
function factorialToDecimal(factorialNotation: string): number {
  let i: number = 0;
  let j: number = factorialNotation.length - 1;
  let result: number = 0;
  while (i != factorialNotation.length) {
    // eslint-disable-next-line max-len
    const factorialNotationConvert: number = +factorialNotation[i]; // This convert the string into a number
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
