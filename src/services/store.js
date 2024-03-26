import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemon-slice'; 

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});