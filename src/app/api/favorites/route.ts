

export async function GET(request: Request) {

    console.log(request.method)

    return Response.json({
        msg: 'GET- Pokemons favorites',
    })
}