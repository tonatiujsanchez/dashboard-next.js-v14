'use client'

import { useEffect, useState } from 'react'
import { NoFavorites, PokemonGrid, SimplePokemon } from '@/pokemons'
import { useAppSelector } from '@/store'

export const PokemonFavorites = () => {

    const { favorites } = useAppSelector(state => state.pokemons)
    const pokemonFavorites = Object.values(favorites)

    return (
        pokemonFavorites.length === 0
            ? <NoFavorites />
            : <PokemonGrid pokemons={pokemonFavorites} />
    )
}
