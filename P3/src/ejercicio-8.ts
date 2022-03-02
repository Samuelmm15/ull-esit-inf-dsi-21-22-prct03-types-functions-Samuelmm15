/**
 * This function calculates the damage of a attack of our Pokemon Combat.
 * @param ourPokemon Consists in the type of our Pokemon.
 * @param oponentPokemon Consists in the type of the oponent Pokemon.
 * @param attackCapacity Cosists in the attack of our Pokemon.
 * @param defendCapacity Consists in the defend of our Pokemon.
 * @returns The damage of our Pokemon to the oponent Pokemon.
 * **Examples to test the program:**
 * ```
 * ourPokemon = `hierba`; // Start
 * oponentPokemon = `hierba`; // Start
 * attackCapacity = 20; // Start
 * defendCapacity = 10; // Start
 * totalDamage = 50; // Result
 * ---------------------------------
 * ourPokemon = `agua`; // Start
 * oponentPokemon = `fuego`; // Start
 * attackCapacity = 50; // Start
 * defendCapacity = 10; // Start
 * totalDamage = 500; // Result
 * ```
 */
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

const totalDamage = pokemonTrainer(`agua`, `fuego`, 50, 10);
console.log(`El daño total causado es: ${totalDamage}`);
