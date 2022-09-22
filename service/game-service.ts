import axios from 'axios'

const GAME_KEY = 'GAME_DB'

const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://127.0.0.1:3000' : ''

export const gameService = {
    query,
    getGameById

}


async function query() {
    console.log(process.env.RAPID_API_KEY)
    const gameList = await axios.get(`${server}/api/game`)
    const { data } = gameList
    return data

}

async function getGameById(gameId: string | number) {
    const game = await axios.get(`${server}/api/game/${gameId}`)
    const { data } = game
    return data
}