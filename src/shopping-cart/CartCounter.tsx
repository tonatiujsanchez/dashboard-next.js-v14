'use client'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/index'
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice'


interface CounterResponse {
    count: number
}
const getApiCounter = async():Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(resp => resp.json())
    console.log(data)
    return data
}

interface Props {
    value?: number
}
export const CartCounter = ({ value=0 }:Props) => {

    const { count } = useAppSelector( state => state.counter )
    const dispatch = useAppDispatch()

    // useEffect(()=> {
    //     dispatch( initCounterState(value) )
    // },[dispatch, value])

    useEffect(()=> {
        getApiCounter()
            .then( ({ count })=> dispatch( initCounterState(count) ) )
    },[dispatch])

    const handleIncrement = () => {
        dispatch( addOne() )
    }

    const handleDecrement = () => {
       dispatch( substractOne() )
    }


    return (
        <>
            <span className="text-7xl font-medium">{ count }</span>
            <div className="flex justify-center items-center gap-4 mt-5">
                <button
                    onClick={handleDecrement}
                    className="flex items-center justify-center p-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all w-24 font-semibold active:scale-95"
                >
                    -1
                </button>
                <button
                    onClick={handleIncrement}
                    className="flex items-center justify-center p-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all w-24 font-semibold active:scale-95"
                >
                    +1
                </button>
            </div>
        </>
    )
}
