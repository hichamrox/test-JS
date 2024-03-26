import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemons } from '../pokemon-api';

export const fetchPokemonsAsync = createAsyncThunk(
  'pokemon/fetchPokemons',
  async ({ page = 1 }) => {
    const pokemons = await fetchPokemons({ page });
    return pokemons;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    currentPage: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsAsync.pending, (state) => {
        state.loading = true;
        console.log('Fetching pokemons pending...');
      })
      .addCase(fetchPokemonsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
        console.log('Pokemons fetched:', action.payload);
      })
      .addCase(fetchPokemonsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error('Error fetching pokemons:', action.error.message);
      });
  },
});

export const { setCurrentPage } = pokemonSlice.actions;

export const selectPokemons = (state) => state.pokemon.pokemons;
export const selectCurrentPage = (state) => state.pokemon.currentPage;
export const selectPokemonStatus = (state) => state.pokemon.loading;
export const selectPokemonError = (state) => state.pokemon.error;

export default pokemonSlice.reducer;
