/**
 * This program returns if a year is leap or no.
 * @param yearToEvaluate Consists int the year to check if it is leap or no.
 * @returns True or false if is leap or no.
 * **Examples to comprobe with this program:**
 * ```
 * 1997 isn't a leap year, but 1996 is a leap year.
 * 1900 isn`t a leap year, but 2000 is a leap year.
 * ```
 */
function isLeapYear(yearToEvaluate : number) : boolean {
  if ((yearToEvaluate % 4) === 0) {
    if ((yearToEvaluate % 100) === 0) {
      if ((yearToEvaluate % 400) === 0) {
        return true;
      } else {
        return false;
      }
      return true;
    }
    return true;
  } else {
    return false;
  }
}

const yearNumber : number = 1997;
const result = isLeapYear(yearNumber);
if (result === true) {
  console.log(`El año introducido por teclado es bisiesto.`);
} else if (result === false) {
  console.log(`El año introducido por teclado no es bisiesto.`);
}
