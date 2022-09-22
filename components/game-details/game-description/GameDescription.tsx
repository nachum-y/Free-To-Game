import { FC } from 'react'
import { FullGame } from '../../../service/type'
import AdditionalInfo from './AdditionalInfo'
import classes from './GameDescription.module.scss'
import GameScreenshots from './GameScreenshots'

const GameDescription: FC<{ game: FullGame }> = ({ game }) => {
    return (
        <div className={classes['game-description']}>
            <h1>{game.title}</h1>

            <h3>About {game.title}</h3>
            <p className={classes['summary']}>
                {game.description}
            </p>

            <h3>Additional Information</h3>
            <AdditionalInfo
                title={game.title}
                developer={game.developer}
                publisher={game.publisher}
                release_date={game.release_date}
                genre={game.genre}
                platform={game.platform}
            />
            <GameScreenshots
                screenshots={game.screenshots}
            />
        </div>
    )
}

export default GameDescription