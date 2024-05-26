import { Metadata } from 'next'
import { CartCounter } from '@/shopping-cart'

export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Counter Client Side',    
}

export default function CounterPage() {


    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <span>Productos en el carrito</span>
            <CartCounter value={20} />

        </div>
    )
}
