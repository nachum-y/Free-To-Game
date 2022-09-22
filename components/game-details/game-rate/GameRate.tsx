import Image from "next/image"
import { FC } from "react"
import { FullGame } from "../../../service/type"
import classes from './GameRate.module.scss'



const GameRate: FC<{ game: FullGame }> = ({ game }) => {
    return (
        <div className={classes['game-rate']}>
            <div className={classes['game-rate-container']}>
                <Image src={game.thumbnail} width='350px' height='200px' />
                <a href={game.freetogame_profile_url}>
                    <h4>Game Profile </h4>
                    {game.freetogame_profile_url}

                </a>
            </div>
        </div >
    )
}

export default GameRate