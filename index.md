## ÍNDICE

1. [Pasos previos a la realización de la práctica.](#id1)
2. [Configuración inicial del proyecto.](#id2)
3. [Realización de los distintos ejercicios.](#id3) \
  a. [Ejercicio 1.](#id4) \
  b. [Ejercicio 2.](#id5) \
  c. [Ejercicio 3.](#id6) \
  d. [Ejercicio 4.](#id7)

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

Para el desarrollo de este primer ejercicio es necesaria la creación de una función denominada como `isLeapYear` que recibe como parámtro el año el cual se quiere comprobar si se trata de un año bisiesto o no. Esta función, por su parte, devuelve **True** o **False** dependiendo de si se trata de un año bisiesto o no.

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

Para poder comprobar si se trata de un año bisiesto, en primer lugar es necesario dividir el año entre cuatro, si es divisible por 4, se comprueba si es divisible por 100, por último, se comprueba si es divisible por 400, si se cumple esta última condición se dice que es bisiesto, si no se cumple no es bisiesto. Por otro lado, si es divisible por 4 y por 100 también es bisiesto. Para finalizar, si no es divisible por 4 no se trata de un año bisiesto.

Con todo esto anterior, se pudo realizar la programación de dicha función, por tanto, se puede comprobar en la ejecución del programa, que esto es cierto:



### /// Ejercicio 2 - Notación decimal y factorial <a name="id5"></a>

Este segundo ejercicio, se trata de la realización de dos funciones. La primera de ellas, `decimalToFactorial` se encarga de transformar un número decimal a notación factorial. Mientras que, la segunda `factorialToDecimal` trnasforma un número en notación factorial a decimal.

Para el desarrollo de la segunda función, se ha tomado cada valor de la cadena pasada como parámetro a la función. Dónde, a cada elemento de la cadena, se le multiplica el factorial de dicha posición, permitiendo así, obtener como resultado la suma del producto de los elementos del número en notación factorial, multiplicado por su correspondiente factorial. Esto se puede observar a continuación:

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



### /// Ejercicio 3 - Conversor de estilo <a name="id6"></a>

Durante este tercer ejercicio, se desarrollan dos funciones que permiten convertir cadenas introducidas a estilo *Snake Case* o *Camel Case*. 

La primera de ellas se denomina como `fromSnakeToCamelCase`, ya que, se encarga de transformar cadenas del tipo **hola_mundo** a cadenas del tipo **holaMundo**. Para poder conseguir esto, se recorre la cadena introducida, de manera que, cuando se encuentra con "_" la elimina y convierte el siguiente caracter en mayúscula. Además, hay que tener en cuenta que cuando se encuentra que la cadena introducida posee que el primer caracter ya se encuentra en mayúscula, esta función la transforma en minúscula, ya que, este tipo de cadenas no pueden empezar por mayúscula.

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

La segunda función se denomina como `fromCamelToSnakeCase`, ya que, se encarga de tranformar las cadenas del tipo **holaMundo** en cadenas del tipo **hola_mundo**. Para ello, recorre la cadena introducida, de forma que, cuando se topa con un caracter en mayúscula, introduce un "_" y transforma dicho caracter en minúscula.

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



### /// Ejercicio 4 - Conversor ISBN <a name="id7"></a>
