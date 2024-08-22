import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { BsBookmarkPlus, BsBookmarkCheckFill } from 'react-icons/bs'
import { IoHeartOutline, IoShareOutline, IoHeartSharp, IoHeartDislikeOutline } from 'react-icons/io5'
import { GoBookmarkSlash } from "react-icons/go";
import { RWebShare } from 'react-web-share'
import { SpacedevContext } from '../context/context'

const ReactionsComp = ({ post }) => {

  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [url, setUrl] = useState('')

  const { CurrentUser } = useContext(SpacedevContext)

  console.log(CurrentUser);


  const handleClicked = () => {
    setLiked(!liked)
  }

  const savepostClicked = () => {
    setSaved(!saved)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href)
    }
  }, [])

  return (
    <div className=''>
      <div className=' flex flex-row lg:justify-between justify-between px-6 lg:px-0 sticky bottom-0 items-center '>
        <span onClick={handleClicked} className=' flex flex-row items-center gap-2 lg:gap-0 lg:ml-4'>
          {CurrentUser ?
            liked ?
              <IoHeartSharp size={24} className=' lg:w-12 text-rose-500 w-6 cursor-pointer' /> :
              <IoHeartOutline size={24} className=' lg:w-12 w-6 text-rose-500 cursor-pointer' />
            :
            <IoHeartDislikeOutline size={24} className=' lg:w-12 w-6 text-slate-400 cursor-not-allowed' />
          }
          <p className=' text-sm text-rose-600'>{post?.data?.likes} +</p>
        </span>
        <RWebShare
          data={{
            text: `Want to share ${post?.data?.title}?`,
            url: url,
            title: `Want to share ${post?.data?.title}?`
          }}
        >
          <IoShareOutline
            size={26}
            color='#757575'
            className=' lg:w-12 w-6 mx-4 cursor-pointer'
          />
        </RWebShare>

        <div onClick={savepostClicked} className=' flex flex-row items-center gap-2 lg:gap-0 mx-4'>
          {CurrentUser ?
            saved ?
              <BsBookmarkCheckFill size={22} className=' lg:w-12 text-indigo-500 w-6 cursor-pointer' /> :
              <BsBookmarkPlus size={22} className=' lg:w-12 w-6 text-slate-500 cursor-pointer' />
            :
            <GoBookmarkSlash size={22} className=' lg:w-12 w-6 text-slate-400 cursor-not-allowed' />
          }
        </div>
      </div>
    </div>
  )
}

export default ReactionsComp
