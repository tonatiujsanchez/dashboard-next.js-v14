'use client'
import { SimpleWidget } from '@/components'
import { useAppSelector } from '@/store'
import {  IoCartOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {

    const { count } = useAppSelector( state => state.counter )

    return (
        <div className="flex flex-wrap gap-4 justify-center p-2">
            <SimpleWidget
                title={`${ count }`}
                subTitle='Productos'
                label='contador'
                icon={<IoCartOutline size={50} className="text-blue-600" />}
                href='/dashboard/counter'
            />
        </div>
    )
}
