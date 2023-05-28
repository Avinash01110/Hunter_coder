import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar/>
    <div className='bg-white h-screen text-black'>
    <Component {...pageProps} />
    </div>
  </> 
}
