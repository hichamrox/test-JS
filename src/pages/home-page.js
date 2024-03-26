import PokemonCard from "../components/pokemon-card";
import Header from "../components/header";
import Pagination from "../components/pagination";
import Footer from "../components/footer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonsAsync,
  selectPokemons,
  selectPokemonStatus,
  selectPokemonError,
  selectCurrentPage,
  setCurrentPage
} from "../services/reducers/pokemon-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);
  const loading = useSelector(selectPokemonStatus);
  const error = useSelector(selectPokemonError);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchPokemonsAsync({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div classNameName="App">
      <div>
        <div>
          <Header />
          <div className="single-product-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
              <div className="row">
                {pokemons &&
                  pokemons.results &&
                  pokemons.results.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemonDetails={pokemon} />
                  ))}
              </div>
              <Pagination totalCount={1302} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
