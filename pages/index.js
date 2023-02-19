import Head from 'next/head'

import OriginalUrlForm from '../components/OriginalUrlForm'

const Home = () => {
  return (
    <>
      <Head>
        <title>URL Shortener</title>
      </Head>
      <main>
        <OriginalUrlForm />
      </main>
    </>
  )
}

export default Home
