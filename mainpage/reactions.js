import React, { useState } from 'react'
import { BsBookmarkPlus,BsBookmarkCheckFill } from 'react-icons/bs'
import { IoHeartOutline, IoShareOutline, IoHeartSharp} from 'react-icons/io5'
const ReactionsComp = ({post}) => {

  const[liked, setLiked]=useState(false)
  const[saved, setSaved]=useState(false)

  const handleClicked=()=>{
    setLiked(!liked)
  }

  const savepostClicked=()=>{
    setSaved(!saved)
  }


  return (  
    <div className=''>
      <div className=' flex flex-row lg:justify-evenly justify-between px-6 lg:px-0 sticky bottom-0 items-center '>
        
        <div onClick={handleClicked} className=' flex flex-row items-center gap-2 lg:gap-0 lg:ml-4'>
        {liked ? 
        <IoHeartSharp size={24}  className=' lg:w-12 text-rose-500 w-6 cursor-pointer'/> : 
        <IoHeartOutline size={24}  className=' lg:w-12 w-6 text-rose-500 cursor-pointer'/>
        }
        <p className=' text-sm text-rose-600'>{post?.data?.likes} +</p>

        </div>
        <IoShareOutline size={26} color='#757575'className=' lg:w-12 w-6 mx-4 cursor-pointer'/>

        <div onClick={savepostClicked} className=' flex flex-row items-center gap-2 lg:gap-0 lg:mx-4'>
          {saved ? 
          <BsBookmarkCheckFill size={22}  className=' lg:w-12 text-indigo-500 w-6 cursor-pointer'/> : 
          <BsBookmarkPlus size={22}  className=' lg:w-12 w-6 text-slate-500 cursor-pointer'/>
          }
        </div>
      </div>
    </div>
  )
}

export default ReactionsComp
