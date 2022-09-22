import Image from 'next/image'
import { FC } from 'react'
import { GameScreenshots } from '../../../service/type'
import classes from './GameScreenshots.module.scss'

const GameScreenshots: FC<{ screenshots: GameScreenshots }> = ({ screenshots }) => {
    return (

        <div className={classes['game-screenshots']}>
            {screenshots.map((img) => (
                <Image key={img.id} src={img.image} width='230px' height='140px' />
            ))}
        </div>
    )
}

export default GameScreenshots