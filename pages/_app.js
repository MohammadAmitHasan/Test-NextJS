import '../styles/globals.css'
import Head from 'next/head'
import Header from '../Components/header'
import Footer from '../Components/footer'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(
      <div className='h-screen'>
        <Component {...pageProps} />
      </div>)
  }

  return (
    <>
      <Head>
        <title>My NextJS App</title>
        <meta name='description' content='My NextJs project' />
      </Head>
      <Header></Header>
      <div className='h-screen'>
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </>
  )
}

export default MyApp
