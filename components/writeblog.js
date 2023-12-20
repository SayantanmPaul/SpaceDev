import React from 'react'
import Logo from '../Images/rocket.svg'
import Image from 'next/image'
const WriteBlogModal = () => {
  return (
    <div className=' lg:min-w-[1024px] md:min-w-[624px] min-w-[364px] min-h-[100px] top-5 lg:p-10 md:px-8 py-8 px-4 gap-4 flex flex-col '>
      <div className=' flex flex-row gap-2 items-center'>

        <h1 className=' lg:text-[44px] text-3xl font-newsletter'>Thinking a new Blog ? </h1>
        <div className=' md:w-[52px] lg:w-[70px] w-[70px] '>
          <Image src={Logo} alt='logo' width={100} height={100}/>
        </div>
        
      </div>
      <form>
        <div className='w-full max-w-full py-6'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-4xl text-2xl font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="Title *"
      />
        </div>
        <div className='w-full max-w-full py-4'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-2xl text-lg font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="a brief of your blog *"
      />
        </div>
        <div className='w-full max-w-full py-4'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-xl text-lg font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="provide banner image url *"
      />
        </div>
        <div className=' flex lg:flex-row  flex-col gap-3'>
          <div className='w-full max-w-full py-4'>
          <input
          className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
          type="text"
          required
          placeholder="catagory *"
        />
        </div>
        <div className='w-full max-w-full lg:p-4 pb-4'>
        <div className=' flex lg:flex-row flex-col gap-4'>
          <span className=' min-w-fit text-md font-newsletter '>Estimated time to read</span>
          <input
        className=" w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="minutes to read"
      />
        </div>
      
        </div>
        </div>
      </form>
    </div>
  )
}

export default WriteBlogModal
