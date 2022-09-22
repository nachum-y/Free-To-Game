import '../styles/globals.css'
import type { AppProps } from 'next/app'

import GameProvider from '../store/game'
import Layout from '../components/Layout/Latout'

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <GameProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GameProvider>
  )
}

export default MyApp
