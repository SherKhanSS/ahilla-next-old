import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Ахилла</title>
        <meta
          name="description"
          content="Независимый аналитический проект о жизни РПЦ"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />

    </>
  )
}
