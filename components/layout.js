import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Side from './side'

const Layout = ({children}) => {
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
      <main className="main">
        <div className="main__wrapper">
          <h1 className="visually-hidden">Независимый аналитический проект «Ахилла»</h1>
          <section className="main__content content">         
          {children}
          <Side/>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout;