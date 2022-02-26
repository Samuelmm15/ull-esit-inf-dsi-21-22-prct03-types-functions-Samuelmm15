// Este ejercicio también está mal hecho comprobar como se hace
function fromSnakeToCamelCase(stringToConvert: string): string {
  let auxiliaryNumber = 0;
  while (auxiliaryNumber != stringToConvert.length) {
    if (stringToConvert[auxiliaryNumber] === `_`) {
      auxiliaryNumber ++;
      stringToConvert[auxiliaryNumber].toUpperCase();
    }
    auxiliaryNumber ++;
  };
  return stringToConvert;
}

function fromCamelToSnakeCase(stringToConvert: string): string {
  return `0`;
}

const resultSnakeToCamel = fromSnakeToCamelCase('the_stealth_warrior');
const resultCamelToSnake = fromCamelToSnakeCase('theStealthWarrior');
console.log(`La conversión de Snake a Camel Case es ${resultSnakeToCamel}`);
console.log(`La conversión de Camel a Snake Case es ${resultCamelToSnake}`);
