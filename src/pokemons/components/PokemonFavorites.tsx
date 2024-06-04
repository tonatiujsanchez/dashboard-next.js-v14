'use client'

import { useState } from 'react'
import { NoFavorites, PokemonGrid, SimplePokemon } from '@/pokemons'
import { useAppSelector } from '@/store'

export const PokemonFavorites = () => {

    const pokemons = useAppSelector(state => state.pokemons)
    const [pokemonFavorites, _setPokemonFavorites] = useState<SimplePokemon[]>(Object.values(pokemons))

    return (
        pokemonFavorites.length === 0
            ? <NoFavorites />
            : <PokemonGrid pokemons={pokemonFavorites} />
    )
}
