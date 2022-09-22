import Image from "next/image"

import classes from './MainHeader.module.scss'

const MainHeader = () => {
    return (
        <nav className={classes['main-header']}>
            <Image src='https://www.freetogame.com/assets/images/freetogame-logo.png' width='165px' height='45px' />
        </nav>
    )

}

export default MainHeader