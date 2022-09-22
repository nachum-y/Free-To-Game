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
    games: null,
    loadgame: () => { },
    onAppLoad: () => { },


}



export const GameContext = createContext<ContextDefaultValuesGame>(
    contextDefaultValuesGame
)

const GameProvider: FC<Props> = ({ children }) => {
    const [games, setGames] = useState<null | Game[]>(contextDefaultValuesGame.games)



    const onAppLoad = async () => {
        const gameList: Game[] = await gameService.query()
        setGames(gameList)
    }

    const loadgame = () => {

    }

    return (
        <GameContext.Provider
            value={{
                games,
                loadgame,
                onAppLoad,
            }}

        >
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider