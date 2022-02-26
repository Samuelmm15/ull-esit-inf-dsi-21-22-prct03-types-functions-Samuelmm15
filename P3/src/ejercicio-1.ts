
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
