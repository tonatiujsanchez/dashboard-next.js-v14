import { PokemonGrid } from '@/pokemons'


export const metadata = () => {
    return {
        title: '❤ Favoritos',
        description: 'Pokemons favoritos'
    }
}

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col pb-10">
            <span className="text-3xl p-2">Pokemons Favoritos <small className="text-blue-600">(Global state)</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    )
}