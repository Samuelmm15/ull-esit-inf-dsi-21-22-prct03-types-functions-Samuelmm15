// ENCONTRAR EL MODO DE ORDENAR DE MANERA CORRECTA
function inDescendingOrden(originalNumber: number): number {
  const originalNumberAuxiliary = originalNumber.toString();
  let i = 0;
  let j = 0;
  let descendingOrdenNumber: string = ``;
  let auxiliary = 0;
  while (j != originalNumberAuxiliary.length) {
    while (i != originalNumberAuxiliary.length) {
      const convertNumber: number = +originalNumberAuxiliary[i];
      if (convertNumber >= auxiliary) {
        auxiliary = convertNumber;
      }
      i++;
    }
    descendingOrdenNumber = descendingOrdenNumber + auxiliary.toString();
    i = 0;
    j++;
  }
  const descendingOrdenNumberConverted: number = +descendingOrdenNumber;
  return descendingOrdenNumberConverted;
}

const numberToConvert = inDescendingOrden(42145);
console.log(`El valor introducido, en orden descendente es ${numberToConvert}`);

// descendingOrdenNumber = descendingOrdenNumber + convertNumber.toString();
