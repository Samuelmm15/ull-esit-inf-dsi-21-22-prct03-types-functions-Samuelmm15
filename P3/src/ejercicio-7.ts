/**
 * This function returns the number of heads of Cerberus after
 * the end of the attacks.
 * @param initialHeads Consists in the number of heads that has Cerberus
 * at the beginning.
 * @param nValue Consists in the new heads.
 * @param numberOfAttacks Consists in the number of the attacks.
 * @returns The number of heads that has Cerberus at the end of the attacks.
 * **Examples to test the program:**
 * ```
 * initialHeads = 2; // Start
 * nValue = 1; // Start
 * numberOfAttacks = 1; // Start
 * cerberusTotalHeads = 2; // Result
 * ---------------------------------
 * initialHeads = 5; // Start
 * nValue = 10; // Start
 *  numberOfAttacks = 3; // Start
 * cerberusTotalHeads = 92; // Result
 * ```
 */
function wonderWoman(initialHeads: number, nValue: number,
    numberOfAttacks: number): number {
  let i: number = 1;
  let result: number = 0;
  while (i <= numberOfAttacks) {
    console.log(`${nValue} cabezas aparecen después del ataque ${i}.`);
    result = (initialHeads - 1) + nValue;
    initialHeads = result;
    i++;
    nValue = i * nValue;
  }
  return result;
}

const cerberusTotalHeads = wonderWoman(5, 10, 3);
// eslint-disable-next-line max-len
console.log(`El número de cabezas que tiene Cerberus al final son ${cerberusTotalHeads}`);
