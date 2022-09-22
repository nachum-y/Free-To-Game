import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import GameList from '../components/game-list/GameList'
import MainHeader from '../components/header/MainHeader'
import { GameContext } from '../store/game'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { onAppLoad } = useContext(GameContext)
  useEffect(() => {
    onAppLoad()
  }, [])



  return (
    <div className={styles.container}>
      <Head>
        <title>Free To Game</title>
        <meta name="description" content={`"Play the best free-to-play games for PC and Browser in ${(new Date).getFullYear()}!"`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <main className={styles.main}>
        <h1 className={styles.title}> Best Free Games for PC and Browser In {(new Date).getFullYear()}!</h1>
        <GameList />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/nachum-y"
          target="_blank"
          rel="noopener noreferrer"
        >
          © {(new Date).getFullYear()} Free To Game.{' '}
        </a>
      </footer>
    </div>
  )
}

export default Home
