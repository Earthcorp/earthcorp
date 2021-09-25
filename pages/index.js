import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="Hero">
      <Head>
        <title>Earthcorp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}