// ENCONTRAR EL MODO DE ORDENAR DE MANERA CORRECTA
function inDescendingOrden(originalNumber: number): number {
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

const numberToConvert = inDescendingOrden(123456789);
console.log(`El valor introducido, en orden descendente es ${numberToConvert}`);

