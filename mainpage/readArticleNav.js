import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import SpaceDev  from '../Images/SpaceDev.svg'
import { HiOutlineUserCircle } from "react-icons/hi2";
import {CiSearch} from 'react-icons/ci'
const readArticleNav = () => {
  return (
    <>
    <div className=' flex flex-row justify-between items-center '>
    <Link href={'/'}>
      <div className='w-48 lg:w-56 cursor-pointer'>
        <Image src={SpaceDev} alt='logo' width='0' height='0' sizes='100vw' priority className=' w-full h-auto'/>
      </div>
    </Link>
    <div className='flex flex-row gap-4 '>
        <div className=' flex flex-col justify-center'>
          <CiSearch size={32} color='#757575' className=' lg:w-8 lg:h-8 w-7 h-7 cursor-pointer'/>
        </div>
        <HiOutlineUserCircle size={32} color='#757575' className='lg:w-8 lg:h-8 w-7 h-7 cursor-pointer'/>
    </div>
    </div>
    </>
  )
}

export default readArticleNav
