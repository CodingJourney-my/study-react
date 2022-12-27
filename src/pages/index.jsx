import Head from 'next/head'
import classes from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  // const handleClickButton = useCallback((e) => {
  //   e.preventDefault()
  //   alert('aaa')
  // }, [])
  const countUp = () => {
    setCount(count => count + 1)
  }
  const countDown = () => {
    setCount(count => count - 1)
  }

  return (
    <>
      <Header/>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>{count}</h1>
      <button onClick={countUp}>
        Up!
      </button>
      <button onClick={countDown}>
        Down!
      </button>
      <Main/>
    </>
  )
}
