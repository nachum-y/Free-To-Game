
import { useContext } from 'react'
import { GameContext } from '../../../store/game'
import classes from './AllGames.module.scss'
const AllGames = () => {

    const { games } = useContext(GameContext)

    return (
        <div className={classes['all-games']}>

            {games && games.slice(1, 20).map((game) => (
                <article key={game.id}
                    className={classes['game-card-holder']}>
                    {game.title}

                </article>
            ))

            }

        </div>
    )
}

export default AllGames