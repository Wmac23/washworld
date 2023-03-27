import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
 return (
    <>
     
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="WashWorld" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <main>
      <img className='logo' src="washworld_logo.jpg" alt="" />
      <Link href='/locations'><button> <h1>START</h1> <br /><p>Press start to begin</p></button></Link>
    </main>
    </>
  )
}
