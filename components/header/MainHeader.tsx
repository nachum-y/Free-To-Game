import Image from "next/image"

import classes from './MainHeader.module.scss'

const MainHeader = () => {
    return (
        <nav className={classes['main-header']}>
            <Image src='/logo/free-to-game-logo.png' width='165px' height='120px' />

        </nav>
    )

}

export default MainHeader