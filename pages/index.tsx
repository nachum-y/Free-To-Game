import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Free To Game</title>
        <meta name="description" content={`"Play the best free-to-play games for PC and Browser in ${(new Date).getFullYear()}!"`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

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
