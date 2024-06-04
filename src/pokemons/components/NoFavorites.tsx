import Link from 'next/link'
import { CgPokemon } from 'react-icons/cg'
import { IoHeartDislikeOutline } from 'react-icons/io5'


export const NoFavorites = () => {
    return (
        <section className="container px-4 mx-auto">
            <div className="flex items-center mt-6 text-center rounded-lg h-96">
                <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
                    <div className="p-3 mx-auto text-gray-500 bg-blue-100 rounded-full">
                        <IoHeartDislikeOutline size={32} />
                    </div>
                    <h1 className="mt-3 text-lg text-gray-800 dark:text-white">Sin favoritos</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">No se encontraron pokemones favoritos agregados</p>
                    <div className="flex items-center mt-6 sm:mx-auto gap-x-3">
                        <Link 
                            href="/dashboard/pokemons"
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-red-600"
                        >
                            <CgPokemon size={24} />
                            <span>Ver pokemons</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
