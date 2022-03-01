
function manhattanDIstance(p1Coordinate: number, p2Coordinate: number,
    q1Coordinate: number, q2Coordinate: number, p3Coordinate: number = 0,
    q3Coordinate:number = 0): number {
  let result: number = 0;
  // eslint-disable-next-line max-len
  result = Math.abs((p1Coordinate - q1Coordinate)) + Math.abs((p2Coordinate - q2Coordinate)) + Math.abs((p3Coordinate - q3Coordinate)); // La función abs sirve para relizar el valor absoluto
  return result;
}

const distanceResult = manhattanDIstance(-1, 3, -5, 8, 7, 7);
// eslint-disable-next-line max-len
console.log(`La distancia de Manhattan entre ambos puntos es: ${distanceResult}`);
