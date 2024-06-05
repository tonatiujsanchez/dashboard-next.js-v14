import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons'


interface PokemonState {
    favorites: {
        [key: string]: SimplePokemon
    }
}

const initialState: PokemonState = {
    favorites: {}
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setPokemonFavorites: ( state, action:PayloadAction<{ [key: string]: SimplePokemon }> ) => {
            state.favorites = action.payload
        },
        toggleFavorite: (state, action:PayloadAction<SimplePokemon>) => {
            
            const { id, name } = action.payload

            if( !!state.favorites[id] ){
                delete state.favorites[id]
            }else {
                state.favorites[id] = { id, name }
            }

        }

    }
});

export const { setPokemonFavorites, toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer