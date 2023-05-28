import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Hunter coder</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='Keyword' content='Blog page' />
      </Head>
    </div>
    {/* <Script src='/src.js' strategy='lazyOnload'></Script> this is how can we add a script tag in js */}
    
    <div className='h-screen bg-white'>
    <h1 className='flex justify-center pt-28 text-black text-4xl font-bold font-sans sm:text-6xl'>&lt;Hunter Coder/&gt;</h1>
      <div className='flex justify-center pt-16 pb-6 bg-white'>
        <img className='rounded-full' src="/pic1.png" alt="" width={560}/>
      </div>
    </div>
    </>
  )
}
