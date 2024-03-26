export const fetchPokemons = async ({ page }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 20}&limit=20`);  const jsonData = await response.json();
  return jsonData;
};


