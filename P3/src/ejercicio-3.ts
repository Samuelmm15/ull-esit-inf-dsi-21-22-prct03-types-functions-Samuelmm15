/**
 * This function transform the Snake Case into Camel Case.
 * @param stringToConvert Consists in the string to convert.
 * @returns A string that is the result of the conversion.
 * **Examples to test the program:**
 * ```
 * stringToConvert = `The_stealth_warrior`; // Start
 * resultSnakeToCamel = `theStealthWarrior`; // Result
 * ```
 */
function fromSnakeToCamelCase(stringToConvert: string): string {
  let i: number = 0;
  let resultString: string = ` `;
  while (i != stringToConvert.length) {
    if (stringToConvert[i] === `_`) {
      i++;
      resultString = resultString + stringToConvert[i].toUpperCase();
    } else {
      if (stringToConvert[0] === stringToConvert[0].toUpperCase()) {
        resultString = resultString + stringToConvert[i].toLowerCase();
      } else {
        resultString = resultString + stringToConvert[i];
      }
    }
    i++;
  };
  return resultString;
}
/**
 * This function convert a Camel Case string into a Snake Case string.
 * @param stringToConvert Consists in the string to convert.
 * @returns A string that is the result of the conversion.
 * **Examples to test the program:**
 * ```
 * stringToConvert = `theStealthWarrior`; // Start
 * resultCamelToSnake = `the_stealth_warrior`; // Finish
 * ```
 */
function fromCamelToSnakeCase(stringToConvert: string): string {
  let i: number = 0;
  let resultString: string = ` `;
  while (i != stringToConvert.length) {
    if (stringToConvert[i] === stringToConvert[i].toUpperCase()) {
      resultString = resultString + `_`;
      resultString = resultString + stringToConvert[i].toLowerCase();
    } else {
      resultString = resultString + stringToConvert[i];
    }
    i++;
  }
  return resultString;
}

const resultSnakeToCamel = fromSnakeToCamelCase('The_stealth_warrior');
const resultCamelToSnake = fromCamelToSnakeCase('theStealthWarrior');
console.log(`La conversión de Snake a Camel Case es ${resultSnakeToCamel}`);
console.log(`La conversión de Camel a Snake Case es ${resultCamelToSnake}`);
