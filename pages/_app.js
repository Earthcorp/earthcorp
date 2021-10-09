import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import Header from 'components/Header'
import Footer from 'components/Footer'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp