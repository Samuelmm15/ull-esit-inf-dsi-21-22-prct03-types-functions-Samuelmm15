/**
 * This function returns the number of IPs that is in a range of IPs.
 * @param firstIPNumber Consists in the first IP of the range.
 * @param secondIPNumber Consists in the second IP of the range.
 * @returns A number that is the number of IPs in the range.
 * **Examples to test the program:**
 * ```
 * firstIPNumber = `10.0.0.0`; // Start
 * secondIPNumber = `10.0.0.50`; // Start
 * ipsNumberInRange = 50; // Result
 * ----------------------------------
 * firstIPNumber = `10.0.0.0`; // Start
 * secondIPNumber = `10.0.1.0`; // Start
 * ipsNumberInRange = 256; // Result
 * ----------------------------------
 * firstIPNumber = `20.0.0.10`; // Start
 * secondIPNumber = `20.0.1.0`; // Start
 * ipsNumberInRange = 246; // Result
 * ```
 */
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
      if (Math.sign(auxiliaryResult) === -1) { // To comprobe that is a negative number
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
