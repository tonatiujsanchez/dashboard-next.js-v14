import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'


export const metadata = () => {
    return {
        title: 'Listado de pokemons (151)',
        description: 'Listado de los primeros 151 pokemons de la PokeAPI'
    }
}

const getPokemons = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemons:SimplePokemon[] = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    })) 

    //Forzar un error
    // throw new Error('something went wrong on the server.')

    return pokemons
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)

    return (
        <div className="flex flex-col pb-10">
            <span className="text-3xl p-2">Pokemons List <small className="text-blue-600">(static)</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}