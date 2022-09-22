import { Head } from "next/document"
import { FC } from "react"
import { Props } from "../../service/type"
import MainHeader from "../header/MainHeader"
import classes from './Layout.module.scss'


const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <MainHeader />
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                <a
                    href="https://github.com/nachum-y"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    © {(new Date).getFullYear()} Free To Game.{' '}
                </a>
            </footer>
        </>
    )
}

export default Layout