'use client'
import { ReactNode, useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, store } from '@/store'
import { setPokemonFavorites } from '@/store/pokemons/pokemonsSlice'

interface Props {
    children: ReactNode
}
export const Providers = ({ children }: Props) => {

    
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        
        // Create the store instance the first time this renders
        storeRef.current = store()
        
        // Set initial state
        // Code here
    }


    useEffect(() => {
        if( storeRef.current ){
            storeRef.current.dispatch(setPokemonFavorites( JSON.parse( localStorage.getItem('pokemons-favorites') ?? '{}' ) ) )
        }
    }, [storeRef])
    


    return (
        <Provider store={storeRef.current}>{children}</Provider>
    )
}
