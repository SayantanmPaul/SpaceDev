import React from 'react'
import Image from 'next/image'
import Author from '../Images/author.jpg';
import titleImage from '../Images/C.jpg'
import { FiClock } from "react-icons/fi";

const tempData={
    author:'Duane Valz',
    title: 'The Corporate Governance Failure at the Heart of Sam Altman’s Ouster from OpenAI',
    subhead: [
        'Corporate Governance at OpenAI',
        'Alternative Structures with Aligned Incentives'
    ],
    maincontent: 'In this piece I examine both the flawed corporate structure of OpenAI, and the neglect of governance evolution during a year of immense change. Those things led to the chaos that is still unfolding around the firing of Sam Altman. I conclude that alternative governance structures aren’t the issue, as some may readily surmise. Nonetheless, how OpenAI’s particular structure was set up and managed left it vulnerable to calamity. Other alternative structures, such as those instituted by Anthropic, were more thoughtfully put together, better harmonize the interests of multiple stakeholders, and should be more resilient to slow divergences of goals or sudden organizational shocks'
}



const ArticleMainComp = () => {
  return (
    <div  className=' flex justify-center'>
        <div style={{maxWidth: '680px'}} className=''>
          <div className=' flex flex-col items-start gap-6'>

            {/* content heading */}
            <h1 className=' text-[32px] font-sans lg:text-[40px] leading-10 tracking-tight lg:leading-snug font-bold'>{tempData.title}
            </h1>

            {/* author details */}
            <div className=' flex flex-row w-full justify-between items-center relative'>
              <div className=' flex flex-row gap-3 items-center'>
                <div className=' w-10 h-10 overflow-hidden rounded-full '>
                  <Image src={Author} alt='author' width={200} height={200}/>
                </div>
                <div className=' '>
                  <p className=' text-base font-semibold cursor-pointer hover:underline'>{tempData.author}</p>
                  <div className=' flex flex-row items-center gap-2 text-[#757575]'>
                    <p className=' text-sm'>9 min read</p>
                    <FiClock size={12}/>
                    <p className=' text-sm'> Nov 21</p>
                  </div>
                </div>
              </div>

              <button className=' py-1 px-3 absolute right-0 bg-indigo-400 hover:bg-indigo-500 text-white font-medium text-sm duration-300 rounded-full'>follow</button>
            </div>

            <div className=' w-full h-[1px] bg-slate-200 '></div>
            <div className=' flex flex-col gap-10 '>
              <div className=' w-full h-auto'>
                <Image src={titleImage} alt='authorImage' width='auto' height='auto' className=' w-full h-auto'/>
              </div>

              <div>
                <p className=' text-lg leading-relaxed font-newsletter'>{tempData.maincontent}</p>
                <br/>
                <p className=' text-lg leading-relaxed font-newsletter'>{tempData.maincontent}</p>

                <br/>
                <p className='  text-lg font-medium italic leading-relaxed font-newsletter'>Written by {tempData.author} .</p>
              </div>

              
            </div>
         </div>
        </div>  
    </div>
  )
}

export default ArticleMainComp
