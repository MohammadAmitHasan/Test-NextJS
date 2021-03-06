import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  const handlePlaceOredr = () => {
    // router.push('/Products')
    router.replace('/Products')
  }

  return (
    <div className={styles.container}>
      <Head>
        {/* <title>Create Next App</title> */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My First NextJS App
        </h1>

        <Link href='/Blog'>
          <a>Blog</a>
        </Link>

        <button onClick={handlePlaceOredr}>Place Order</button>



      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
