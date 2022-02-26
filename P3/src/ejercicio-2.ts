// Este programa está mal, echar un vistazo de cómo se hace
function decimalToFactorial(decimalNumber: number): string {
  let factorialRepresentation = 1;
  while (decimalNumber !== 0) {
    factorialRepresentation = factorialRepresentation * decimalNumber;
    decimalNumber = decimalNumber - 1;
  }
  console.log(`${factorialRepresentation}`);
  return factorialRepresentation.toString();
}

function factorialToDecimal(factorialNotation: string): number {
  return 0;
}

const decimalToFactorialResult = decimalToFactorial(10);
// eslint-disable-next-line max-len
console.log(`La conversión de decimal a factorial es ${decimalToFactorialResult}`);
const factorialToDecimalResult = factorialToDecimal(`341010`);
// eslint-disable-next-line max-len
console.log(`La conversión de factorial a decimal es ${factorialToDecimalResult}`);
