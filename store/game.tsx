import { createContext, FC, useState } from "react"
import { ContextDefaultValuesGame, Game } from "../service/type"
import { gameService } from '../service/game-service'
const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://127.0.0.1:3000' : ''
type type1 = any

type gamesType = any
type Props = {
    children: React.ReactNode
}


const contextDefaultValuesGame: ContextDefaultValuesGame = {
    gamesToDisplay: null,
    loadgame: () => { },
    onAppLoad: () => { },
    loadMoreGames: () => { },


}



export const GameContext = createContext<ContextDefaultValuesGame>(
    contextDefaultValuesGame
)

const GameProvider: FC<Props> = ({ children }) => {
    const [games, setGames] = useState<null | Game[]>(null)
    const [gameLen, setGameLen] = useState<number>(0)
    const [gamesToDisplay, setGamesToDisplay] = useState<null | Game[]>(null)


    const onAppLoad = async () => {
        const gameList: Game[] = await gameService.query()
        setGames(gameList)
        loadMoreGames(gameList)
    }

    const loadgame = () => {

    }

    const loadMoreGames = (gamesSet?: Game[]) => {

        let gameList = gamesSet || games
        if (gameList) {
            const lengthGameList = gameList.length

            if (gameLen === 0 && lengthGameList >= 20) {
                const gamesListNew = gameList.slice(1, 20)
                setGamesToDisplay(() => gamesListNew)
                setGameLen((prev) => prev + 20)
                return
            }
            if (gameLen + 20 <= lengthGameList) {
                const gamesListNew = gameList.slice(1, gameLen + 20)
                setGamesToDisplay(() => gamesListNew)
                setGameLen((prev) => prev + 20)

                return
            } else if (gameLen <= lengthGameList) {
                const limitLoadMore = (lengthGameList - gameLen)
                setGamesToDisplay(gameList.slice(1, limitLoadMore))
                return
            }
        }
    }

    return (
        <GameContext.Provider
            value={{
                gamesToDisplay,
                loadgame,
                onAppLoad,
                loadMoreGames,
            }}

        >
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider