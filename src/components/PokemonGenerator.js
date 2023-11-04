
export default function PokemonGenerator() {
  const pokeNum = Math.floor(Math.random() * 151) + 1; 
  // only first generation (151 pokemons)
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;
  

  return (
    <div className="RandomPokemon">
      <img src={url} alt="" />
      <h2>Pokemon #{pokeNum}</h2>
    </div>
  );
}