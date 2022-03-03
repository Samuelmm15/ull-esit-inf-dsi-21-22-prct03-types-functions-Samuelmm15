/**
 * This function calculates de distance of two points.
 * @param p1Coordinate Consists in the first coordinate.
 * @param p2Coordinate Consists in the second coordinate.
 * @param q1Coordinate Consists in the first coordinate.
 * @param q2Coordinate Consists in the second coordinate.
 * @param p3Coordinate Consists in the thirth coordinate.
 * @param q3Coordinate Consists in the thirth coordinate.
 * @returns The distance of the two points.
 * **Examples to test the program:**
 * ```
 * p1Coordinate = 1; // Start
 * p2Coordinate = 3; // Start
 * q1Coordinate = 4; // Start
 * q2Coordinate = 10; // Start
 * distanceResult = 10; // Result
 * ---------------------------------
 * p1Coordinate = 1; // Start
 * p2Coordinate = 1; // Start
 * q1Coordinate = 1; // Start
 * q2Coordinate = 1; // Start
 * distanceResult = 0; // Result
 * ---------------------------------
 * p1Coordinate = -1; // Start
 * p2Coordinate = 3; // Start
 * q1Coordinate = -5; // Start
 * q2Coordinate = 8; // Start
 * p3Coordinate = 7; // Start
 * q3Coordinate = 7; // Start
 * distanceResult = 9; // Result
 * ```
 */
function manhattanDistance(p1Coordinate: number, p2Coordinate: number,
    q1Coordinate: number, q2Coordinate: number, p3Coordinate: number = 0,
    q3Coordinate:number = 0): number {
  let result: number = 0;
  // eslint-disable-next-line max-len
  result = Math.abs((p1Coordinate - q1Coordinate)) + Math.abs((p2Coordinate - q2Coordinate)) + Math.abs((p3Coordinate - q3Coordinate)); // La función abs sirve para relizar el valor absoluto
  return result;
}

const distanceResult = manhattanDistance(-1, 3, -5, 8, 7, 7);
// eslint-disable-next-line max-len
console.log(`La distancia de Manhattan entre ambos puntos es: ${distanceResult}`);
