import React from 'react'
import Image from 'next/image'
import Author from '../Images/author.jpg';
import titleImage from '../Images/C.jpg'
import { FiClock } from "react-icons/fi";
import { useState } from 'react';
import { useContext } from 'react';
import { SpacedevContext } from '../context/context'
import Link from 'next/link';

const tempData={
    author:'Duane Valz',
    title: 'The Corporate Governance Failure at the Heart of Sam Altman’s Ouster from OpenAI',
    subhead: [
        'Corporate Governance at OpenAI',
        'Alternative Structures with Aligned Incentives'
    ],
    maincontent: 'In this piece I examine both the flawed corporate structure of OpenAI, and the neglect of governance evolution during a year of immense change. Those things led to the chaos that is still unfolding around the firing of Sam Altman. I conclude that alternative governance structures aren’t the issue, as some may readily surmise. Nonetheless, how OpenAI’s particular structure was set up and managed left it vulnerable to calamity. Other alternative structures, such as those instituted by Anthropic, were more thoughtfully put together, better harmonize the interests of multiple stakeholders, and should be more resilient to slow divergences of goals or sudden organizational shocks'
}

const ArticleMainComp = ({post, author}) => {
  
  const[isFollowing, SetIsFollowing]=useState(false)

  const handleFollowing=()=>{
    SetIsFollowing(!isFollowing);
  }

  const {CurrentUser}=useContext(SpacedevContext)

  return (
    <div  className=' flex justify-center'>
        <div className=' lg:min-w-[680px] max-w-[680px]'>
          <div className=' flex flex-col items-start gap-6'>

            {/* content heading */}
            {post?.data?.title?
            <h1 className=' text-[32px] font-sans lg:text-[40px] leading-10 tracking-tight lg:leading-snug font-bold'>{post?.data?.title}
            </h1>:<h1 className='text-[32px] font-sans lg:text-[40px] leading-10 tracking-tight lg:leading-snug mx-auto animate-pulse bg-gray-100 rounded-md dark:bg-gray-300 lg:w-[680px] w-[380px] h-6'></h1>}
           

            {/* author details */}
            <div className=' flex flex-row w-full justify-between items-center overflow-hidden relative'>
              <div className=' flex flex-row gap-3 items-center'>
                <div className=' w-10 h-10 overflow-hidden rounded-full '>
                  <Image src={author?.data?.imgurl || `https://images.unsplash.com/photo-1618278942403-e973260cc425?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt='author' width={350} height={200}/>
                </div>
                <div className=' '>
                <Link href={`/UserProfile/${author?.data?.email}`}>
                  <p className=' text-base font-semibold cursor-pointer hover:underline'>{author?.data?.name ||tempData.author}</p>
                  </Link>
                  <div className=' flex flex-row items-center gap-2 text-[#757575]'>
                    <p className=' text-sm'>{post?.data?.postLength || 10} min read</p>
                    <FiClock size={12}/>
                    <p>{new Date(post?.data?.datePosted || '').toLocaleString('en-US', {
              day: 'numeric',
              month: 'short'
              })}
            </p>
                  </div>
                </div>
              </div>
              {isFollowing && CurrentUser?
              <button onClick={handleFollowing} className=' py-1 px-3 absolute right-0 bg-indigo-400 hover:bg-indigo-500 text-white font-medium text-sm duration-300 ease-in-out rounded-full'>following
              </button>:
              <button onClick={handleFollowing} className=' py-1 px-3 absolute right-0 bg-indigo-400 hover:bg-indigo-500 text-white font-medium text-sm duration-300 ease-in-out rounded-full'>follow</button>
              }
              
            </div>

            {/* article banner image */}
            <div className=' w-full h-[1px] bg-slate-200 '></div>
            <div className=' flex flex-col gap-10 '>
              <div className=' lg:min-w-[680px] md:min-w-[680px] min-w-full h-auto'>
                <Image 
                src={post?.data?.bannerImage || `https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif`} 
                alt='authorImage' 
                width={400} 
                height={400} 
                className=' w-full lg:max-h-[560px] md:max-h-[560px] max-h-[360px] object-cover'
                priority
                />
              </div>

              {/* article main body and credit to the author */}
              <div>
                <p className=' text-lg leading-relaxed font-newsletter'>{post?.data?.body}</p>
                <br/>
                <p className='  text-lg font-medium italic leading-relaxed font-newsletter'>Written by {author?.data?.name} .</p>
              </div>
            </div>  
         </div>
        </div>  
    </div>
  )
}

export default ArticleMainComp
