import Image from 'next/image';
import InitialImage from '../Images/unsplash1.jpg';
import Author from '../Images/author.jpg';
import { BsBookmarkPlus } from 'react-icons/bs';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MainContent = () => {

  const [fontSize, setfontSize]=useState('18px')
  useEffect(()=>{
    const responsiveScreen=()=>{
      if(window.innerWidth<600){
        setfontSize('15px')
      }else setfontSize('18px')
    }

    responsiveScreen();
    window.addEventListener("resize", () => responsiveScreen());
  })

  function MaxText({text, maxLength}){
    const words = text.split(' ');

    if(words.length > maxLength){
      text = words.slice(0, maxLength).join(' ') + ' ...';
    }
    return <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: fontSize}}>{text}</p>
    }

<MaxText text='What I Wish Wed Done at the First Sign Mom Was Losing Her Memory blah blah' maxLength={20}/>

  return (
    <>
      <div className=' flex flex-row'>
      <div className=' flex flex-col lg:max-w-[475px] max-w-[500px] mx-auto'>
        <div className=' flex flex-row items-center gap-2'>
          <div className=' w-[20px] h-[20px] rounded-full overflow-hidden'>
            <Image 
              src={Author}
              alt="user"
              width={100}
              height={100}
              />
          </div>
          <div>
            <p className=' text-[12px] lg:text-[14px] font-semibold'>Cameron Kruse</p>
          </div>
        </div>
        <div>
          <MaxText text='What I Wish We do Done at the First Sign Mom Was Losing Her Memory blah blah' maxLength={13}/>
          <p className=' font-sans text-[16px] text-slate-500 hidden lg:block md:block'>Today the Plotline, the food climate and data community organized by Earth Genome, is launching Food Twin, a proof of concept</p>  
        </div>
        <div className=' flex flex-row justify-between items-center'>
          <div className=' flex flex-row items-center text-[#757575] lg:text-[14px] text-xs gap-2 py-1'>
            <p>Nov 10 </p>.
            <p>8 min read </p>.
            <p className=' bg-slate-200 px-2 py-1 rounded-full hidden lg:block md:block'>topic name</p>
          </div>
          <div className='px-4'>
            <BsBookmarkPlus size={16} color='#757575'/>
          </div>
        </div>
        
      </div>
      
      <div className='w-[220px] overflow-hidden rounded-md flex items-center'>
        <Image 
          src={InitialImage}
          alt='main image'
          width={300}
          height={200}
          />
      </div>
      </div>
    </>
  );
};

export default MainContent;
