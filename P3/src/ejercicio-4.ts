/**
 * This function validates the identification of numbers ISBN-10.
 * @param ISBNCode Consists in the ISBN-10 code.
 * @returns True or false if the ISBN-10 code is valid or no.
 * **Examples to test the program:**
 * ```
 * ISBNCode = `3-598-21508-8`; // Start
 * ---------------------------------
 * ISBNCode = `3598215088`; // Start
 * ---------------------------------
 * ISBNCode = `3-598-21507-X`; // Start
 * ---------------------------------
 * ISBNCode = `359821507X`; // Start
 * ```
 */
function isValidISBN(ISBNCode: string): boolean {
  let auxiliaryNumber: number = 10;
  let auxiliaryNumberISBN: number = 0;
  let auxiliary: number = 0;
  let auxiliaryResult: number = 0;
  while (auxiliaryNumber !== 0) {
    if (ISBNCode[auxiliaryNumberISBN] !== `-`) {
      if (ISBNCode[auxiliaryNumberISBN] === `X`) {
        const convertNumber: number = 10;
        auxiliary = auxiliaryNumber * convertNumber;
        auxiliaryResult = auxiliaryResult + auxiliary;
      } else {
        const convertNumber: number = +ISBNCode[auxiliaryNumberISBN];
        auxiliary = auxiliaryNumber * convertNumber;
        auxiliaryResult = auxiliaryResult + auxiliary;
      }
    } else {
      auxiliaryNumber++;
    }
    auxiliaryNumber--;
    auxiliaryNumberISBN++;
  }
  if ((auxiliaryResult % 11) === 0) {
    return true;
  } else {
    return false;
  }
}

const resultISBN = isValidISBN(`3-598-21507-X`);
if (resultISBN === true) {
  console.log(`El código ISBN-10 introducido es válido.`);
} else if (resultISBN === false) {
  console.log(`El código ISBN-10 introducido no es válido.`);
}

