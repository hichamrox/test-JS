import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsPage = ({pokemonType}) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Fetch Pokémon details based on the id parameter
    fetchPokemonDetails(id);
  }, [id]);

  const fetchPokemonDetails = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

    return (
        <div>
          <div className="single-product-area">
            <div class="zigzag-bottom"></div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="product-content-right">
                    <div class="product-breadcroumb">
                      <Link to="/">Back</Link>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="product-images">
                          <div class="product-main-img">
                            <img src={pokemon.sprites.other.home.front_default} />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="product-inner">
                          <h2 class="product-name">ID : {id}</h2>
                          <div class="product-inner-price">
                            <ins>height :{pokemon.height}</ins>
                            <ins>weight: {pokemon.weight}</ins>
                          </div>

                          <div class="product-inner-category">
                            <h2>{pokemon.name}</h2>
                            Types :<ul>
                  {pokemon.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                  ))}
                </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default DetailsPage

