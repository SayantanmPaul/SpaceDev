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
      <div className=' w-[80px] h-auto cursor-pointer'>
        <Image src={SpaceDev} alt='logo' width={200} height={50}/>
      </div>
    </Link>
    <div className='flex flex-row gap-4 '>
        <CiSearch size={32} color='#757575' className=' cursor-pointer'/>
        <HiOutlineUserCircle size={32} color='#757575' className=' cursor-pointer'/>
    </div>
    </div>
    </>
  )
}

export default readArticleNav
