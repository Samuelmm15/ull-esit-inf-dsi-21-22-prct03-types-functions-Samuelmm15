## ÍNDICE

1. [Pasos previos a la realización de la práctica.](#id1)
2. [Configuración inicial del proyecto.](#id2)
3. [Realización de los distintos ejercicios.](#id3) \
  a. [Ejercicio 1.](#id4) \
  b. [Ejercicio 2.](#id5) \
  c. [Ejercicio 3.](#id6) \
  d. [Ejercicio 4.](#id7) \
  e. [Ejercicio 5.](#id8) \
  f. [Ejercicio 6.](#id9) \
  g. [Ejercicio 7.](#id10) \
  h. [Ejercicio 8.](#id11) \
  i. [Ejercicio 9.](#id12) \
  j. [Ejercicio 10.](#id13) 

## // Tareas previas <a name="id1"></a>

Para la realización de esta tercera práctica de la asignatura `Desarrollo de Sistemas Informáticos`, se ha de realizar la 
lectura de una serie de documentos que serán necesarios para poder comprender ciertas cosas útiles para el desarrollo de la 
práctica.

Algunos de estos documentos que son necesarios para poder entender ciertas funciones que presenta el lenguaje son los 
documentos relacionados con las funciones útiles del [método string](https://www.w3schools.com/js/js_string_methods.asp) o el 
uso de [expresiones regulares](https://www.w3schools.com/js/js_regexp.asp) en JavaScript.

Por otro lado, se debe de realizar la lectura de documentos relacionados con el empleo de [TypeDoc](https://typedoc.org) para 
la generación de documentación para los proyectos. También, se debe de leer la documentación relacionada con [Mocha](https://mochajs.org) 
y [Chai](https://www.chaijs.com), que se tratan de herramientas que permiten incorporar desarrollo por pruebas (TDD) o 
desarrollo dirigido por comportamiento (BDD) para los proyectos.

## // Configuración inicial de los distintos aspectos del proyecto <a name="id2"></a>

Para la realización de los distintos ejercicios solicitados en el [guión](https://ull-esit-inf-dsi-2122.github.io/prct03-types-functions/) 
de la práctica 3, ha sido necesaria la creación de un nuevo proyecto denominado como P3, dentro de este se han configurado los 
distintos ficheros que permiten realizar todo proyecto desarrollado en TypeScript.

Para la creación de un nuevo proyecto en TypeScript se necesita la ejecución del comando:

```
[~/P3()]$ npm init --yes
```

Este comando genera un fichero denominado como `package.json` que permite la declaración de distintas dependencias y de otras 
características. Para la ejecución del proyecto a realizar, a dicho fichero se le añaden scripts de ejecución como:

```
"scripts": {
    "start": "tsc-watch --onSuccess \"node dist/ejercicio-1.js\"",
    "doc": "typedoc"
  }

```

El script **"start"** permite la ejecución un proceso que permite compilar y ejecutar el código desarrollado en TypeScript de 
los distintos ficheros del proyecto en tiempo real. Por otro lado, el script **"doc"** permite la generación de la 
documentación de los distintos ficheros que conforman el proyecto, gracias a [TypeDoc](https://typedoc.org).

Seguidamente, se ejecuta el comando:

```
[~/P3()]$ tsc --init
```

Permitiendo la generación de un fichero denominado como `tsconfig.json`. Este, contiene las distintas opciones del compilador 
de TypeScript. Para el correcto desarrollo de la práctica, se añaden las siguientes líneas a dicho documento:

```
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true, 
"strict": true,
"noImplicitAny": true,
"strictNullChecks": true,
"noImplicitReturns": true,
```

Para finalizar, se crea un último fichero denominado como `typedoc.json`. A este fichero, se le añaden las siguientes líneas 
para poder generar la documentación de los distintos ficheros de nuestro proyecto:

```
{
    "entryPoints": [
        "./src/ejercicio-1.ts",
        "./src/ejercicio-2.ts"
    ],
    "out": "./docs"
}
```

Hay que tener en cuenta que en **"entryPoints"** se deben de añadir todos aquellos ficheros en los que se quiere generar la 
documentación automática.

Con todo esto anterior configurado de manera correcta, ya se tiene la base del proyecto TypeScript para poder realizar los 
disntos ejercicios solicitados en la práctica.

## // Realización de los distintos ejercicios <a name="id3"></a>

Para la correcta realización de los distintos ejercicios de la práctica, se crean distintos ficheros con nomber `ejercicio-n.ts` en el directorio `./src`, ya que, este se trata del directorio que contiene los disntos ficheros de código TypeScript del proyecto.

### /// Ejercicio 1 - Años bisiestos <a name="id4"></a>

Para el desarrollo de este primer ejercicio es necesaria la creación de una función denominada como `isLeapYear` que recibe como 
parámtro el año el cual se quiere comprobar si se trata de un año bisiesto o no. Esta función, por su parte, devuelve **True** o 
**False** dependiendo de si se trata de un año bisiesto o no.

Como se puede observar a continuación, la función `isLeapYear` es configurada de la siguiente manera:

```
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
```

Para poder comprobar si se trata de un año bisiesto, en primer lugar es necesario dividir el año entre cuatro, si es divisible por 
4, se comprueba si es divisible por 100, por último, se comprueba si es divisible por 400, si se cumple esta última condición se 
dice que es bisiesto, si no se cumple no es bisiesto. Por otro lado, si es divisible por 4 y por 100 también es bisiesto. Para 
finalizar, si no es divisible por 4 no se trata de un año bisiesto.

Con todo esto anterior, se pudo realizar la programación de dicha función, por tanto, se puede comprobar en la ejecución del 
programa, que esto es cierto:

[imagen]

### /// Ejercicio 2 - Notación decimal y factorial <a name="id5"></a>

Este segundo ejercicio, se trata de la realización de dos funciones. La primera de ellas, `decimalToFactorial` se encarga de 
transformar un número decimal a notación factorial. Mientras que, la segunda `factorialToDecimal` trnasforma un número en notación 
factorial a decimal.

Para el desarrollo de la segunda función, se ha tomado cada valor de la cadena pasada como parámetro a la función. Dónde, a cada 
elemento de la cadena, se le multiplica el factorial de dicha posición, permitiendo así, obtener como resultado la suma del 
producto de los elementos del número en notación factorial, multiplicado por su correspondiente factorial. Esto se puede observar a 
continuación:

```
function factorialToDecimal(factorialNotation: string): number {
  let i: number = 0;
  let j: number = factorialNotation.length - 1;
  let result: number = 0;
  while (i != factorialNotation.length) {
    const factorialNotationConvert: number = +factorialNotation[i];
    let auxiliaryResult: number = 1;
    for (let k:number = 1; k <= j; k++) {
      auxiliaryResult = auxiliaryResult * k;
    }
    const factorialResult: number = auxiliaryResult * factorialNotationConvert;
    result = result + factorialResult;
    i++;
    j--;
  }
  return result;
}
```

Por último, se puede ver su ejecución de esto anterior:

[imagen]

### /// Ejercicio 3 - Conversor de estilo <a name="id6"></a>

Durante este tercer ejercicio, se desarrollan dos funciones que permiten convertir cadenas introducidas a estilo *Snake Case* o 
*Camel Case*. 

La primera de ellas se denomina como `fromSnakeToCamelCase`, ya que, se encarga de transformar cadenas del tipo **hola_mundo** a 
cadenas del tipo **holaMundo**. Para poder conseguir esto, se recorre la cadena introducida, de manera que, cuando se encuentra con 
"_" la elimina y convierte el siguiente caracter en mayúscula. Además, hay que tener en cuenta que cuando se encuentra que la 
cadena introducida posee que el primer caracter ya se encuentra en mayúscula, esta función la transforma en minúscula, ya que, este 
tipo de cadenas no pueden empezar por mayúscula.

Esto anterior queda reflejado en el siguiente desarrollo:

```
function fromSnakeToCamelCase(stringToConvert: string): string {
  let i: number = 0;
  let resultString: string = ` `;
  while (i != stringToConvert.length) {
    if (stringToConvert[i] === `_`) {
      i++;
      resultString = resultString + stringToConvert[i].toUpperCase();
    } else {
      if (stringToConvert[0] === stringToConvert[0].toUpperCase()) {
        resultString = resultString + stringToConvert[i].toLowerCase();
      } else {
        resultString = resultString + stringToConvert[i];
      }
    }
    i++;
  };
  return resultString;
}
```

La segunda función se denomina como `fromCamelToSnakeCase`, ya que, se encarga de tranformar las cadenas del tipo **holaMundo** en 
cadenas del tipo **hola_mundo**. Para ello, recorre la cadena introducida, de forma que, cuando se topa con un caracter en 
mayúscula, introduce un "_" y transforma dicho caracter en minúscula.

Este desarrollo queda plasmado en el siguiente código:

```
function fromCamelToSnakeCase(stringToConvert: string): string {
  let i: number = 0;
  let resultString: string = ` `;
  while (i != stringToConvert.length) {
    if (stringToConvert[i] === stringToConvert[i].toUpperCase()) {
      resultString = resultString + `_`;
      resultString = resultString + stringToConvert[i].toLowerCase();
    } else {
      resultString = resultString + stringToConvert[i];
    }
    i++;
  }
  return resultString;
}
```

Finalmente, para visualizar el funcionamiento del programa, se tiene la imagen a continuación:

[imagen]

### /// Ejercicio 4 - Conversor ISBN <a name="id7"></a>

Para este cuarto ejercicio, se realiza el desarrollo de la función `isValidISBN`. 

Esta función, se encarga de validar la identificación de números con formato ISBN-10. Normalmente, este tipo de formato se basa 
principalmente en números compuestos por dígitos de 0 a 9 y un caracter de comprobación que puede ser un dígito del 0 al 9 o una X.

Para el desarrollo de dicha función, se recibe como parámetro una cadena que contiene un código ISBN-10, la cúal se comprueba 
caracter por caracter para poder realizar la operación necesaria para la validación de dicho código. Para ello, se realiza la 
multiplicación de todos los dígitos del código introducido, y, una vez se ha realizado el producto de todos sus dígitos, se realiza 
el módulo del resultado. Si dicho módulo es 0, la función retorna **true**, es decir, el código introducido es válido, si no, 
retorna **false** y por tanto el código no es válido. También, hay que tener en cuenta que dicho código puede estar separado por 
"-", por tanto, si la función se encuentra con esos guiones, pasa al siguiente caracter del código introducido. Además, si la 
función se encuentra con una X, esta es sustituida como un 10 para poder realizar el producto de validación del código ISBN-10.

Todo esto anteriormente comentado se puede observar en el código realizado a continuación:

```
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
```

Para finalizar, se puede comprobar el funcionamiento del programa:

[imagen]

### /// Ejercicio 5 - Orden descendente <a name="id8"></a>

Para la realización del quinto ejercicio, se realiza la programación de la función `inDescendingOrder`.

Para ello, la función recibe como parámetro un número entero no negativo, el cual se quiere que los dígitos que conforman dicho 
número, sea ordenado de mayor a menor valor.

Durante el desarrollo de dicha función, se transforma el número pasado como parámetro en un array. Esto se debe a que, aprovechando 
la funcionalidad de la función `sort()` que presentan los arrays en JavaScript, permite ordenar los distintos elementos que 
conforman el array de manera que pueden ser ordenados de menor a mayor. Con ello, se realiza la concatenación de los distintos 
elementos del vector, de manera que se genera la ordenación de los elementos del vector de mayor a menor, y puede ser retornada la 
ordenación como salida de la función desarrollada.

Esto se puede observar a continuación en la programación de la función:

```
function inDescendingOrder(originalNumber: number): number {
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
```

Como se puede observar en la imagen a continuación, la salida del programa para cualquier entrada a la función es:

[imagen]

### /// Ejercicio 6 - Contando IPs <a name="id9"></a>

Durante el desarrollo de este sexto problema, se realiza la programación de la función `ipsRange`. Esta función, se encarga de 
calcular el número de ips que existen dentro del rango de ips que es pasada como parámetro para la función.

Para realizar el cálculo del número de IPs que existen en un rango de IPs,hay que tener en cuenta que se debe de realizar la resta 
de la dirección IP del final de rango, menos la primera IP de esta. Para ello, se debe de tener en cuenta que la función se encarga 
de recorrer todos los caracteres de ambas direcciones, generándose que cuando se encuentre un punto, se realice la resta de ambas 
direcciones, permitiendo determinar el número de Ips que existen entre ambos valores. Por otro lado, se tiene que tener en cuenta 
que cuando se genera que alguno de los valores entre ambos puntos es cero, se tiene que comprobar entre que intervalo de puntos se 
encuentra dicho cero, debido, a que se puede generar que la resta de ambas direcciones resulte 1, pero en realidad, existen 255 
direcciones para poder completar el rango.

Es por ello, que se puede observar el desarrollo de todo lo expuesto anteriormente en la siguiente función programada:

```
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
```

Como se puede ver a continuación, la ejecución de dicho programa resulta:

[imagen]

### /// Ejercicio 7 - Wonder Woman <a name="id10"></a>

En este séptimo ejercicio, se desarrolla la función `wonderWoman`. Esta función se encarga de obtener el número de cabezas que 
tendrá el ser mitológico Cerberus tras una serie de ataques.

Con ello, se debe de determinar que dependiendo del número de cabezas iniciales que Cerberus posea y dependiendo del número de 
ataques que se le realicen, resultará un número de cabezas u otro, teniendo en cuenta que por cada ataque que se le realice a una 
cabeza, le aparecen "2 * n" cabezas.

Con todo esto anterior, se ha realizado la programación de la función de manera:

```
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
```

Como se puede observar, dependiendo de los valores introducidos inicialmente, permitiendo visualizar las distintas situaciones que 
se pueden generar al atacar al ser mitológico Cerberus, se realiza la ejecución del programa de manera:

[imagen]

### /// Ejercicio 8 - Entrenador Pokemon <a name="id11"></a>

Para la realización del ejercicio 8, se ha programado la función `pokemonTrainer`. Esta, permite obtener el daño que va a realizar 
un Pokemon, dependiendo del tipo de Pokemon que sea el lanzado, el tipo de Pokemon del oponente, del ataque de nuestro Pokemon y de 
la defensa de este.

Teniendo en cuenta que la efectividad de nuestros Pokemon dependen del tipo de Pokemon del que se traten el nuestro y el de nuestro 
oponente. Con esta efectividad, se determina el aumento del daño de nuestro Pokemon, o en caso contrario, de la neutralidad o de la 
disminución del daño. Es por ello que para el desarrollo de la función, se ha debido de tener en cuenta muchas opciones que se 
deben de cumplir para que la efectividad de nuestro Pokemon frente a otro, sea de un tipo o de otro.

Una vez obtenida la efectividad de nuestro Pokemon frente a otro, de puede determinar el daño realizado, siguiendo la fórmula: 

```
damage = 50 * (attack / defense) * effectivity;
```

Con todo esto anterior, se puede determinar que el desarrollo de la función finalmente es:

```
function pokemonTrainer(ourPokemon: string, oponentPokemon: string,
    attackCapacity: number, defendCapacity: number): number {
  let damage: number = 0;
  let efficiency: number = 0;
  if ((ourPokemon === `fuego`) && (oponentPokemon === `hierba`)) {
    efficiency = 2;
  } else if ((ourPokemon === `fuego`) && (oponentPokemon === `agua`)) {
    efficiency = 0.5;
  } else if ((ourPokemon === `fuego`) && (oponentPokemon === `eléctrico`)) {
    efficiency = 1;
  } else if ((ourPokemon === `agua`) && (oponentPokemon === `hierba`)) {
    efficiency = 0.5;
  } else if ((ourPokemon === `agua`) && (oponentPokemon === `eléctrico`)) {
    efficiency = 0.5;
  } else if ((ourPokemon === `hierba`) && (oponentPokemon === `eléctrico`)) {
    efficiency = 1;
  } else if (ourPokemon === oponentPokemon) {
    efficiency = 0.5;
  } else if ((ourPokemon === `hierba`) && (oponentPokemon === `fuego`)) {
    efficiency = 0.5;
  } else if ((ourPokemon === `agua`) && (oponentPokemon === `fuego`)) {
    efficiency = 2;
  } else if ((ourPokemon === `eléctrico`) && (oponentPokemon === `fuego`)) {
    efficiency = 1;
  } else if ((ourPokemon === `hierba`) && (oponentPokemon === `agua`)) {
    efficiency = 2;
  } else if ((ourPokemon === `eléctrico`) && (oponentPokemon === `agua`)) {
    efficiency = 2;
  } else if ((ourPokemon === `eléctrico`) && (oponentPokemon === `hierba`)) {
    efficiency = 1;
  }
  damage = 50 * (attackCapacity / defendCapacity) * efficiency;
  return damage;
}
```

Como se puede observar a continuación, se puede comprobar el daño realizado por nuestro Pokemon de manera:

[imagen]

### /// Ejercicio 9 - Astérix no entiende a estos romanos <a name="id12"></a>

Durante el desarrollo de la novena actividad, se realiza la programación de las funciones `romanToDecimal` y `decimalToRoman`. La 
primera de estas se encarga de transformar un número romano a decimal. En cambio, la segunda se encarga de transformar un número 
decimal en números romanos.

Para el desarrollo de la función `romanToDecimal` hay que tener en cuenta que se realiza el recorrido de todos los caracteres que 
conforman el número romano, de manera que se va añadiendo a una variable contador el resultado de convertir dichos números romanos 
a números decimales. Pero, hay que tener en cuenta que cuando se produce que un número romano que es mayor que otro, se encuentra 
inmediatamente a su derecha, se debe de realizar la resta del número mayor menos el menor. Su resultado es añadido a la variable 
contador.

Con todo esto mencionado anteriormente, se ha realizado la programación de dicha función de forma:

```
function romanToDecimal(romanNumber: string): number {
  let auxiliaryRomanNumber: number = 0;
  let i: number = 0;
  let result: number = 0;
  let convertNumber: number = 0;
  let flag: number = 0;
  while (i !== romanNumber.length) {
    if (romanNumber[i] === `M`) {
      convertNumber = 1000;
    } else if (romanNumber[i] === `D`) {
      convertNumber = 500;
    } else if (romanNumber[i] === `C`) {
      convertNumber = 100;
    } else if (romanNumber[i] === `L`) {
      convertNumber = 50;
    } else if (romanNumber[i] === `X`) {
      convertNumber = 10;
    } else if (romanNumber[i] === `V`) {
      convertNumber = 5;
    } else if (romanNumber[i] === `I`) {
      convertNumber = 1;
    }

    if (i === 0) {
      auxiliaryRomanNumber = convertNumber;
      result = convertNumber;
    }
    if ((auxiliaryRomanNumber < convertNumber) && (i >= 1)) {
      const auxiliaryResult: number = convertNumber - auxiliaryRomanNumber;
      result = result + auxiliaryResult;
    } else if ((auxiliaryRomanNumber > convertNumber) && (i >= 2)) {
      if ((flag != 0) && (i !== (romanNumber.length - 1))) {
        result = result + auxiliaryRomanNumber;
        flag = 0;
      }
      auxiliaryRomanNumber = convertNumber;
      flag++;
      if (i === (romanNumber.length - 1)) {
        result = result + convertNumber;
      }
    } else if ((auxiliaryRomanNumber === convertNumber) && (i >= 1)) {
      result = result + convertNumber;
    }
    if (i == 1) {
      auxiliaryRomanNumber = convertNumber;
    } else if (i > 1) {
      auxiliaryRomanNumber = convertNumber;
    }
    i++;
  }
  return result;
}
```

Por otro lado, para la programación de la función `decimalToRoman`, se debe de realizar la resta del mayor valor posible en número 
romano, que permita realizar la resta del número decimal introducido sin que su resultado sea negativo. Con ello, se consigue 
obtener el número romano que representa dicho número decimal.

Esto se puede observar en el código desarrollado posteriormente:

```
function decimalToRoman(decimalNumber: number): string {
  let result: string = ``;
  let auxiliaryResult: string;
  while (decimalNumber != 0) {
    if ((decimalNumber % 1000) === 0) {
      auxiliaryResult = `M`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -1000;
    } else if ((decimalNumber % 500) === 0) {
      auxiliaryResult = `D`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -500;
    } else if ((decimalNumber % 100) === 0) {
      auxiliaryResult = `C`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -100;
    } else if ((decimalNumber % 50) === 0) {
      auxiliaryResult = `L`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -50;
    } else if ((decimalNumber % 10) === 0) {
      auxiliaryResult = `X`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -10;
    } else if ((decimalNumber % 5) === 0) {
      auxiliaryResult = `V`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -5;
    } else if ((decimalNumber % 1) === 0) {
      auxiliaryResult = `I`;
      result = auxiliaryResult + result;
      decimalNumber = decimalNumber -1;
    }
  }
  return result;
}
```

A continuación, se tiene la ejecución de ambas funciones, pudiendo comprobar la transformación de los distintos números, en los 
distintos formatos introducidos:

[imagen]

### /// Ejercicio 10 - Distancia de Manhattan <a name="id13"></a>

Para la realización del décimo ejercicio, se realiza la función `manhattanDistance`. Esta, devuelve la distancia total que existe 
entre dos puntos.

Para la programación de dicha función, se ha de realiza la diferencia de la primera coordenada del primer punto, menos, la de la 
primera coordenada del segundo. De esta manera, con todas las coordenadas que posean ambos puntos. 

Es por ello que, la función tiene el aspecto:

```
function manhattanDistance(p1Coordinate: number, p2Coordinate: number,
    q1Coordinate: number, q2Coordinate: number, p3Coordinate: number = 0,
    q3Coordinate:number = 0): number {
  let result: number = 0;
  // eslint-disable-next-line max-len
  result = Math.abs((p1Coordinate - q1Coordinate)) + Math.abs((p2Coordinate - q2Coordinate)) + Math.abs((p3Coordinate - q3Coordinate));
  return result;
}
```

Para finalizar, se puede observar la distancia entre dos puntos tomados como ejemplo:

[imagen]

**En conclusión**, la realización de este primer proyecto autónomo, desarrollando 10 ejercicios distintos, ha permitido comprender 
el funcionamiento, el desarrollo y el uso de las distintas herramientas que son necesarias para poder realizar proyectos 
desarrollados en TypeScript.

Algunos de estos ejercicios han presentado una complejidad mayor, pero, haciendo uso de ciertas funciones implementadas en las 
librearías del lenguaje, han permitido que se haya podido resolver los distitos problemas.

Por último, gracias a este primer proyecto realizado de manera autónoma, me ha pemitido familiarizarme con la configuración de 
ciertos aspectos del compilador de TypeScript, aspectos también relacionados con TypeDoc, etc.