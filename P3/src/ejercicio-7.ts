// eslint-disable-next-line max-len
function wonderWoman(initialHeads: number, nValue: number, numberOfAtacks: number): number {
  let i: number = 1;
  let result: number = 0;
  while (i <= numberOfAtacks) {
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
