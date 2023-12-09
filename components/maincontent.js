import Image from 'next/image';
import InitialImage from '../Images/unsplash1.jpg';
import Author from '../Images/author.jpg';
import { BsBookmarkPlus } from 'react-icons/bs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDoc, doc} from 'firebase/firestore';
import { db } from '../firebase';

const MainContent = ({post}) => {
  // font size limit for different screen size 
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

  // font size limit
  function MaxText({text, maxLength}){
    const words = text.split(' ');

    if(words.length > maxLength){
      text = words.slice(0, maxLength).join(' ') + ' ...';
    }
    return <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: fontSize}}>{post.data.title}</p>
    }

  
  return (
    <>
    <Link href={`/AuthorPost/${post.id}`} as={`/AuthorPost/${post.id}`}>
      <div className=' flex flex-row items-center'>
      <div className=' flex flex-col lg:max-w-[475px] md:max-w-[475px] max-w-[240px] mx-auto'>
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
            <p className=' text-[12px] lg:text-[14px] font-semibold'>{post.data.author}</p>
          </div>
        </div>
        <div className=''>
          <MaxText text='What I Wish We do Done at the First Sign Mom Was Losing Her Memory blah blah' maxLength={13}/>
          <p className=' font-sans text-[16px] text-slate-500 hidden lg:block md:block'>{post.data.brief}</p>  
        </div>
        <div className=' flex flex-row justify-between items-center'>
          <div className=' flex flex-row items-center text-[#757575] lg:text-[14px] text-xs lg:gap-2 gap-1 py-1'>
            <p>{new Date().toLocaleString('en-US', {
              day: 'numeric',
              month: 'short'
              })}</p>•
            <p>{post.data.postLength} min read</p>•
            <p className=' bg-slate-200 px-2 py-[5px] rounded-full hidden lg:block md:block'>{post.data.catagorypost}</p>
          </div>
          <div className='px-4'>
            <BsBookmarkPlus size={16} color='#757575'/>
          </div>
        </div>
      </div>
        <div className=' flex items-center scale-100 hover:scale-105 duration-500'>
          <Image 
            src={post.data.bannerImage}
            alt='main image'
            width={300}
            height={200}
            priority
            className=' object-cover w-48 lg:h-36 h-28 lg:rounded-md rounded'
            />
        </div>
      </div>
    </Link>
    </>
  );
};

export default MainContent;
