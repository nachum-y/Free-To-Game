
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Game } from '../../../service/type'
import classes from './GameCard.module.scss'

const GameCard: FC<{ game: Game }> = ({ game }) => {
    return (
        <Link href={{
            pathname: `/${game.id}`,
            query: { gameId: game.id },
        }}
        >
            <article className={classes['game-card']}>
                <Image src={game.thumbnail} width='260px' height='140px' />
                <div className={classes['game-card-body']}>
                    <div className={classes['game-card-body-header']}>
                        <h4 className={classes['game-card-body-header-title']} >{game.title}</h4>
                        <span className={classes['game-card-body-header-free']}>FREE</span>
                    </div>
                    <span className={classes['game-card-body-badge-genre']}>{game.genre}</span>
                </div>
            </article >
        </Link>
    )
}

export default GameCard