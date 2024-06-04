import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import pokemonsSlice from './pokemons/pokemonsSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()