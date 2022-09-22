import { FC } from "react"
import { Game } from "../../service/type"
import AllGames from "./all-games/AllGames"

const GameList: FC<{ gamesToDisplay: Game[] }> = ({ gamesToDisplay }) => {
    return (

        <AllGames gamesToDisplay={gamesToDisplay} />

    )
}

export default GameList