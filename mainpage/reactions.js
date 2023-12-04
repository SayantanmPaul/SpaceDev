import React from 'react'
import { BsBookmarkPlus } from 'react-icons/bs'
import { IoHeartOutline, IoShareOutline} from 'react-icons/io5'
const ReactionsComp = () => {
  return (
    <div className=''>
      <div className=' flex flex-row lg:justify-evenly justify-between px-10 lg:px-0 sticky bottom-0 items-center '>
        <IoHeartOutline size={24} color='#757575' className=' lg:w-12 w-6 cursor-pointer'/>
        <BsBookmarkPlus size={22} color='#757575' className=' lg:w-12 w-6 cursor-pointer'/>
        <IoShareOutline size={26} color='#757575'className=' lg:w-12 w-6 cursor-pointer'/>
      </div>
    </div>
  )
}

export default ReactionsComp
