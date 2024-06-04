import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons'


interface PokemonState {
    [key: string]: SimplePokemon
}

const initialState: PokemonState = {
    // '1': { id: '1', name: 'bulbasaur' },
    // '4': { id: '4', name: 'charmander' },
    // '6': { id: '6', name: 'charizard' },
    // '10': { id: '10', name: 'caterpie' },
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite: (state, action:PayloadAction<SimplePokemon>) => {
            
            const { id, name } = action.payload

            if( !!state[id] ){
                delete state[id]
                return
            }

            state[id] = { id, name }
        }

    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer