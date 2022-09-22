import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import classes from './GameDetails.module.scss'
import { gameService } from '../../service/game-service'
import { FullGame } from '../../service/type'
import GameDescription from '../../components/game-details/game-description/GameDescription'
import Image from 'next/image'
const GameDetails = () => {

    const router = useRouter()
    const [game, setGame] = useState<null | FullGame>(null)

    useEffect(() => {
        if (router.query) {
            const { gameId } = router.query
            const game = gameService.getGameById(gameId as string)
            game.then((game) => {
                setGame(game)
            })
        }

    }, [router])

    if (!game) {
        return <div>Loadding</div>
    }

    return (
        <>
            {/* <div className={classes['game-image']}>
                <Image src={game.thumbnail} width='100vw' height='500px' style={{ opacity: '0.2' }} />
            </div> */}
            <div className={classes['game-details']}>
                <div>
                    t3
                </div>
                <GameDescription game={game} />

            </div>
        </>
    )
}

export default GameDetails