import pokemonBackImage from "../assets/pokemon.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonDetails }) => {
    const [pokemon, setPokemon] = useState({});
    const [pokemonImage, setPokemonImage] = useState("");
    const [pokemonType, setPokemonType] = useState([]);

    const fetchPokemon = async (url) => {
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
      }

    useEffect(() => {
        fetchPokemon(pokemonDetails.url)
        .then((data) => {
            setPokemon(data);
            setPokemonType(data.types);
            setPokemonImage(data.sprites.other.home.front_default);
        })
    },[])

  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product">
        <div className="pokemon-card">
          <div className="card-back">
            <img src={pokemonBackImage} alt="Pokemon" />
          </div>
          <div className="card-front">
            <div className="card-details">
              <h4>{pokemonDetails.name.toUpperCase()}</h4>
              <img src={pokemonImage} alt="Pokemon" />
              <div>
                <p>Type :</p>
                <ul>
                  {pokemonType.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h2>
        <Link to={`/pokemon/${pokemon.id}`}>{pokemonDetails.name} </Link>
        </h2>
        <Link to={`/pokemon/${pokemon.id}`}>
        <div className="product-option-shop">
          <a
            className="add_to_cart_button"
            data-quantity="1"
            data-product_sku=""
            data-product_id="70"
            rel="nofollow"
          >
            Détails
          </a>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
