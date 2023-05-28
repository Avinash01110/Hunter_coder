import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { parse } from 'postcss'
// Prerendering are of two types : 1. Static site generation
// 2. Server side rendering

const slug = (props) => {
    function createMarkup(c) {
      return {__html: c};
    }
    const [blog, setblog] = useState(props.myblog)
    const router = useRouter()
    // useEffect(() => {
    //   if(!router.isReady) return
    //   const {slug} = router.query
    //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
    //     return a.json()
    //   }).then((parsed)=>{
    //     setblog(parsed)
    //   })
    // }, [router.isReady])
  return (
    <>
    <div className='flex flex-col gap-y-4 px-56 pt-16'>
    <h1 className='flex justify-center text-3xl font-sans font-semibold'>
      {blog && blog.title}
    </h1>
    <hr className='bg-blue-600 h-1'/>
    {blog && <div className='flex justify-center text-justify' dangerouslySetInnerHTML={createMarkup(blog.content)}>
    </div>}
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const {slug} = context.query
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myblog = await data.json()
  return { props: { myblog } };
}
export default slug