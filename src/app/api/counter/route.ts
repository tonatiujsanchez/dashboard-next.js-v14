

export async function GET(request: Request) {

    console.log(request.method)

    return Response.json({
        count: 99,
    })
}