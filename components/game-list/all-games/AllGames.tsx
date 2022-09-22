
import { FC, useContext, useEffect } from 'react'
import { Game } from '../../../service/type'
import { GameContext } from '../../../store/game'
import GameCard from '../../UI/game-card/GameCard'
import classes from './AllGames.module.scss'
const AllGames: FC<{ gamesToDisplay: Game[] }> = ({ gamesToDisplay }) => {

    return (
        <div className={classes['all-games']}>

            {gamesToDisplay && gamesToDisplay.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                />
            ))

            }

        </div>
    )
}

export default AllGames