/**
 * This function changes the order to a decending order of a number.
 * @param originalNumber Consists in the number to change the order.
 * @returns The number in decending order.
 * **Examples to test the program:**
 * ```
 * originalNumber = 42145; // Start
 * numberToConvert = 54421; // Result
 * ---------------------------------
 * originalNumber = 145263; // Start
 * numberToConvert = 654321; // Result
 * ---------------------------------
 * originalNumber = 123456789; // Start
 * numberToConvert = 987654321; // Result
 * ```
 */
function inDescendingOrder(originalNumber: number): number {
  let i: number = 0;
  const originalNumberConverted = originalNumber.toString();
  const auxiliaryArray = [];
  while (i != originalNumberConverted.length) {
    auxiliaryArray.push(originalNumberConverted[i]);
    i++;
  }
  auxiliaryArray.sort();
  i = 0;
  let auxiliary: string = ` `;
  let result: string = ` `;
  while (i != auxiliaryArray.length) {
    auxiliary = auxiliaryArray[i];
    result = auxiliary + result;
    i++;
  }
  const auxiliaryResult: number = +result;
  return auxiliaryResult;
}

const numberToConvert = inDescendingOrder(123456789);
console.log(`El valor introducido, en orden descendente es ${numberToConvert}`);

