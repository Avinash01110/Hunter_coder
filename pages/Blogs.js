import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blogs = (props) => {
  const [blogs, setblogs] = useState(props.myblogs)
  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/blogs').then((a)=>{
  //     return a.json()})
  //     .then((parsed)=>{
  //       setblogs(parsed)
  //     })
  //   },[])
  return (
    <>
      <div className="flex flex-col gap-y-4 bg-white text-black pt-14 px-12 sm:px-20 lg:px-40 xl:px-96">
        {blogs.map((data)=>{
          return <div className='pt-4' key={data.title}>
          <Link href={`/blogspot/${data.slug}`}><h1 className='flex justify-start text-3xl font-semibold'>{data.title}</h1></Link>
          <p className='flex justify-start text-xl cursor-pointer'>{data.metadesc.substr(0,85)}</p>
          <div className='flex justify-start pt-3'>
            <button className='bg-blue-500 px-2 py-2 rounded-lg text-white font-sans font-semibold text-sm hover:bg-blue-300'>Read More</button>
          </div>
          </div>
        })}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  let data = await fetch('http://localhost:3000/api/blogs')
  let myblogs = await data.json()
  // Fetch data from external API
  // Pass data to the page via props
  return { props: { myblogs } };
}

export default Blogs