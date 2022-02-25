
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

const result = isLeapYear(2000);
console.log(`¿El año introducido es bisiesto? = ${result}`);
