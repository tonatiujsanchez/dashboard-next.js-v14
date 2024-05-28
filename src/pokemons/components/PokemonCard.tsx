import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoHeartOutline } from 'react-icons/io5'
import { SimplePokemon } from '@/pokemons'

interface Props {
    pokemon: SimplePokemon
}
export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon

    return (
        <div>

            <article key={pokemon.id}>
                <div className="mx-auto right-0 mt-2 w-60">
                    <div className="bg-white rounded overflow-hidden shadow-lg">
                        <div className="text-center p-6 bg-gray-800 border-b">
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                width={100}
                                height={100}
                                alt={name}
                                className="h-24 w-24 mx-auto"
                                priority={ false }
                            />
                            <p className="pt-2 text-lg font-semibold text-gray-50">{ name }</p>
                            <div className="mt-5">
                                <Link
                                    href={`/dashboard/pokemon/${id}`}
                                    prefetch={true}
                                    className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                                >
                                    Más información
                                </Link>
                            </div>
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full px-4 py-2 hover:bg-gray-100 flex items-center gap-3"
                            >
                                <div className="text-red-600">
                                    <IoHeartOutline size={24} />
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-sm font-medium text-gray-800 leading-none">
                                        Agregar a favoritos
                                    </p>
                                    <p className="text-xs text-gray-500">View your campaigns</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
