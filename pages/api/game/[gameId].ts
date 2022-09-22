import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
    name: string
}

export default async function gameListHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { gameId } = req.query
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: gameId },
        headers: {
            'X-RapidAPI-Key': 'abc2a01dd7msh0e74d02bc3835cep1396f0jsnfdab8cc6a1c7',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }



    try {
        const result = await axios.request(options)
        res.status(200).json(result.data)

    } catch (error) {
        res.status(401)
        console.error("error")
    }

}
