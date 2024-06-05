import { Middleware, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

import counterReducer from './counter/counterSlice'
import pokemonsSlice from './pokemons/pokemonsSlice'
import { localStorageMiddleware } from './middlewares/localstorage-middleware'

export const store  = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            pokemons: pokemonsSlice,
        },
        middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware)
    })
}

export type AppStore = ReturnType<typeof store >
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()