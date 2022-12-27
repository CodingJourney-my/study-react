import Head from 'next/head'
import classes from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import Main from 'src/components/Main'

export default function Home() {
  return (
    <>
      <Header/>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main/>
    </>
  )
}
