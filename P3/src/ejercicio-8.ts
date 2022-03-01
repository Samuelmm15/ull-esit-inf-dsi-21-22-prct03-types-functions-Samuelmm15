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

const totalDamage = pokemonTrainer(`hierba`, `hierba`, 20, 10);
console.log(`El daño total causado es: ${totalDamage}`);
