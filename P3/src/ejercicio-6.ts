function ipsInRange(firstIPNumber: string, secondIPNumber:string): number {
  let i: number = 0;
  let auxiliaryResult: number = 0;
  let result: number = 0;
  while (i !== firstIPNumber.length) {
    if ((firstIPNumber[i] !== `.`) && (secondIPNumber[i] !== `.`)) {
      const convertFirstIPNumber: number = +firstIPNumber[i];
      const convertSecondIPNumber: number = +secondIPNumber[i];
      auxiliaryResult = convertSecondIPNumber - convertFirstIPNumber;
      // eslint-disable-next-line max-len
      if (Math.sign(auxiliaryResult) === -1) { // Para comprobar si se trata de un número negativo
        auxiliaryResult = auxiliaryResult * (-1);
      }
      result = result + auxiliaryResult;
      if (auxiliaryResult !== 0) {
        if (auxiliaryResult === 1) {
          result = result + 255;
        }
      }
    }
    auxiliaryResult = 0;
    i++;
  }
  return result;
}

const ipsNumberInRange = ipsInRange(`10.0.0.0`, `10.0.1.0`);
// eslint-disable-next-line max-len
console.log(`El número de ips que se encuentran dentro del rango introducido son ${ipsNumberInRange}`);
