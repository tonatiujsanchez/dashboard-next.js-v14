'use client'
import { useState } from 'react'

interface Props {
    value?: number
}
export const CartCounter = ({ value=0 }:Props) => {

    const [counter, setCounter] = useState(value)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }
    return (
        <>
            <span className="text-7xl font-medium">{counter}</span>
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
