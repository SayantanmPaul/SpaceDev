import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from '../Images/rocket.svg'
import Image from 'next/image'
import { SpacedevContext } from '../context/context'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

const WriteBlogModal = () => {

  const {CurrentUser}=useContext(SpacedevContext)

  const[title,setTitle]=useState('')
  const[brief,setBrief]=useState('')
  const[category,setCategory]=useState('')
  const[postlength,setPostLength]=useState('')
  const[bannerImage,setBannnerImage]=useState('')
  const[body,setBody]=useState('')

  //add data to firebase storage via user email 
  const addPostToFireStore=async event=>{
    event.preventDefault()

    await addDoc(collection(db, 'blogs'),{
      body: body,
      brief: brief,
      bannerImage: bannerImage,
      topic: category,
      postLength: Number(postlength),
      title: title,
      datePosted: new Date().toISOString(),
      author: CurrentUser.email
    })

  }

  return (
    <div className=' lg:min-w-[1024px] md:min-w-[624px] min-w-[364px] max-h-[100vh] top-5 lg:p-10 md:px-8 py-8 px-4 gap-4 flex flex-col '>
      <div className=' flex flex-row gap-2 items-center'>

        <h1 className=' lg:text-[44px] text-3xl font-newsletter text-indigo-700'>Thinking a new Blog ?</h1>
        <div className=' md:w-[52px] lg:w-[70px] w-[70px] '>
          <Image src={Logo} alt='logo' width={100} height={100}/>
        </div>
        
      </div>
      <form onSubmit={addPostToFireStore}>

        {/* title  */}
        <div className='w-full max-w-full py-6'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-4xl text-2xl font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="Title *"
        value={title}
        onChange={event=>setTitle(event.target.value)}
      />
        </div>

        {/* brief */}
        <div className='w-full max-w-full py-4'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-2xl text-lg font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="a brief of your blog *"
        value={brief}
        onChange={event=>setBrief(event.target.value)}
      />
        </div>

        {/* bannerImage of the post  */}
        <div className='w-full max-w-full py-4'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-xl text-lg font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="provide banner image url *"
        value={bannerImage}
        onChange={event=>setBannnerImage(event.target.value)}
      />
        </div>
        <div className=' flex lg:flex-row  flex-col gap-3'>

          {/* catagory/type of post */}
          <div className='w-full max-w-full py-4'>
          <input
          className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
          type="text"
          required
          placeholder="catagory *"
          value={category}
        onChange={event=>setCategory(event.target.value)}
        />
        </div>
        <div className='w-full max-w-full lg:p-4 pb-4'>

          {/* post read length in minutes  */}
        <div className=' flex lg:flex-row flex-col gap-4'>
          <span className=' min-w-fit text-md font-newsletter '>Estimated time to read :</span>
          <input
        className=" w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="number"
        required
        placeholder="minutes to read"
        value={postlength}
        onChange={event=>setPostLength(event.target.value)}
      />
        </div>
        </div>
        </div>
        {/* body
        text editor section */}
        <div className='w-full max-w-full py-4'>
          <textarea className=' w-full border p-6 focus-visible:border-gray-500 font-newsletter border-gray-300 rounded -md' rows={10} 
          placeholder='/ get started your blog content'
          required
          value={body}
          onChange={event=>setBody(event.target.value)}
          />
        </div>

        <div className=' py-4 '>
          <button className='lg:w-auto w-full max-w-full' type='submit' onSubmit={addPostToFireStore}>
            <p className=' bg-black text-white p-3 lg:text-md text-sm  rounded-lg font-medium  lg:px-6 px-3 overflow-hidden'>Submit your article</p>
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default WriteBlogModal
