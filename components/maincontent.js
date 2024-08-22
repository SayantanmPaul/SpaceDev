import Image from 'next/image';
import { BsBookmarkPlus } from 'react-icons/bs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const MainContent = ({ post }) => {
  //if font size limit for different screen size 
  const [authorData, setAuthorData] = useState()
  const [fontSize, setfontSize] = useState('18px')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const responsiveScreen = () => {
      if (window.innerWidth < 600) {
        setfontSize('15px')
      } else setfontSize('18px')
    }

    responsiveScreen();
    window.addEventListener("resize", () => responsiveScreen());
  })

  // font size limit
  function MaxText({ text, maxLength }) {
    const words = text.split(' ');

    if (words.length > maxLength) {
      text = words.slice(0, maxLength).join(' ') + '...';
    }
    return <p className='hover:underline underline-offset-2' style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: fontSize }}>{text}</p>
  }
  function SubMaxText({ text, maxLength }) {
    const words = text.split(' ');

    if (words.length > maxLength) {
      text = words.slice(0, maxLength).join(' ') + '...';
    }
    return <p className='text-slate-500 hidden lg:block md:block line-clamp-3 text-wrap ' style={{ fontFamily: 'sans-serif' }}>{text}</p>
  }

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData((await getDoc(doc(db, 'users', post.data.author))).data())
      setLoading(false);
    }
    getAuthorData()
  }, [post.data.author])

  if (loading) {
    return (
      <MainContentSkeleton />
    )
  }
  return (
    <>
      <div className=' flex flex-row items-center group w-full'>
        <div className=' flex flex-col w-full'>
          <div className=' flex flex-row items-center gap-2'>
            <div className=' w-5 h-5 rounded-full overflow-hidden'>
              <Image
                src={authorData?.imgurl || 'https://images.unsplash.com/photo-1545472956-3ebf777846cc?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt={authorData?.name || "userimage"}
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className=' text-sm lg:text-[14px] font-semibold'>{authorData?.name}</p>
            </div>
          </div>
          <div className='pr-4'>
            <Link href={`/post/${post.id}`}>
              <MaxText text={post.data.title} maxLength={15} />
            </Link>
            <SubMaxText text={post.data.brief} maxLength={48}/>
            {/* <p className=' '>
              {post.data.brief}
            </p> */}
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
              <BsBookmarkPlus size={16} color='#757575' />
            </div>
          </div>
        </div>
        <div className=' flex items-center overflow-hidden lg:rounded-md rounded w-full lg:max-w-36 lg:h-36 max-w-32 h-32'>
          <Image
            src={post.data.bannerImage}
            alt='main image'
            width={300}
            height={200}
            priority
            className=' object-cover duration-500 group-hover:scale-110 w-full h-full'
          />
        </div>
      </div>
    </>
  );
}

export default MainContent;

export const MainContentSkeleton = () => {
  return (
    <div className='flex flex-row items-center group animate-pulse w-full -z-10 '>
      <div className='flex flex-col lg:min-w-[475px] md:min-w-[556px] min-w-56 mx-auto w-full'>
        {/* Author Section */}
        <div className='flex flex-row items-center gap-2'>
          <div className='w-5 h-5 rounded-full bg-gray-300'></div>
          <div>
            <div className='w-20 h-4 bg-gray-300 rounded-md'></div>
          </div>
        </div>

        {/* Title Section */}
        <div className='pr-4'>
          <div className='w-full h-4 bg-gray-300 mt-2 rounded-md'></div>
          <div className='w-4/5 h-4 bg-gray-200 mt-2 hidden lg:block md:block rounded-md'></div>
        </div>

        {/* Meta Info Section */}
        <div className='flex flex-row justify-between items-center mt-2'>
          <div className='flex flex-row items-center text-[#757575] lg:text-[14px] text-xs lg:gap-2 gap-1 py-1'>
            <div className='w-10 h-4 bg-gray-300 rounded-sm'></div>•
            <div className='w-12 h-4 bg-gray-300 rounded-sm'></div>•
            <div className='w-20 h-5 bg-gray-300 rounded-full hidden lg:block md:block'></div>
          </div>
          <div className='px-4'>
            <BsBookmarkPlus size={16} color='#757575' />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='max-w-28 lg:max-w-36 md:max-w-36 flex items-center overflow-hidden w-full h-full'>
        <div className='w-44 lg:h-36 md:h-36 h-28 bg-gray-300 rounded-md'></div>
      </div>
    </div>
  );
};