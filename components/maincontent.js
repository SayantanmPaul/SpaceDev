import Image from 'next/image';
import InitialImage from '../Images/unsplash1.jpg';
import Author from '../Images/author.jpg';
import { BsBookmarkPlus } from 'react-icons/bs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDoc, doc} from 'firebase/firestore';
import { db } from '../firebase';

const MainContent = ({post}) => {
  //if font size limit for different screen size 
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
      text = words.slice(0, maxLength).join(' ') + '...';
    }
    return <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: fontSize}}>{text}</p>
  }

  //get the user data via email id and access the specific blog via the email id and set to authorData
  const[authorData, setAuthorData]=useState()

  useEffect(()=>{
    const getAuthorData= async()=>{
      setAuthorData((await getDoc(doc(db, 'users', post.data.author))).data())

    }
    getAuthorData()
  }, [post.data.author])

return (
  <>
    <Link href={`/AuthorPost/${post.id}`} as={`/AuthorPost/${post.id}`}>
      <div className=' flex flex-row items-center'>
      <div className=' flex flex-col lg:min-w-[475px] md:max-w-[475px] max-w-[280px] mx-auto w-full'>
        <div className=' flex flex-row items-center gap-2'>
          <div className=' w-[20px] h-[20px] rounded-full overflow-hidden'>
            <Image 
              src={authorData?.imgurl || 'https://images.unsplash.com/photo-1545472956-3ebf777846cc?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt={authorData?.name || "userimage"}
              width={100}
              height={100}
              />
          </div>
          <div>
            <p className=' text-[12px] lg:text-[14px] font-semibold'>{authorData?.name}</p>
          </div>
        </div>
        <div className=''>
          <MaxText text={post.data.title} maxLength={15}/>
          <p className=' font-sans text-[16px] text-slate-500 hidden lg:block md:block'>{post.data.brief}</p>  
        </div>
        <div className=' flex flex-row justify-between items-center'>
          <div className=' flex flex-row items-center text-[#757575] lg:text-[14px] text-xs lg:gap-2 gap-1 py-1'>
            <p>{new Date(post?.data?.datePosted || '').toLocaleString('en-US', {
              day: 'numeric',
              month: 'short'
              })}
            </p>•
            <p>{post.data.postLength} min read</p>•
              <p className=' bg-slate-200 px-2 py-[5px] rounded-full hidden lg:block md:block'>{post.data.catagorypost}
            </p>
          </div>
          <div className='px-4'>
            <BsBookmarkPlus size={16} color='#757575'/>
          </div>
        </div>
      </div>
      <div className=' max-w-32 lg:max-w-56 md:max-w-56 flex items-center overflow-hidden  lg:rounded-md rounded'>
        <Image 
            src={post.data.bannerImage}
            alt='main image'
            width={300}
            height={200}
            priority
            
            className=' object-cover w-48 lg:h-36 md:h-36 h-28 duration-500'
            />
        </div>
      </div>
    </Link>
  </>
  );
}

export default MainContent;
