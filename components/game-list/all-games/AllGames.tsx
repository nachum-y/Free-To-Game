
import { useContext, useEffect } from 'react'
import { GameContext } from '../../../store/game'
import GameCard from '../../UI/game-card/GameCard'
import classes from './AllGames.module.scss'
const AllGames = () => {

    const { games } = useContext(GameContext)
    useEffect(() => {
        if (games) {

            console.log(games.slice(1, 20))
        }
    }, [games])


    return (
        <div className={classes['all-games']}>

            {games && games.slice(1, 20).map((game) => (
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