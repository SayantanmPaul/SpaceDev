import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import SpaceDev  from '../Images/SpaceDev.svg'
import { HiOutlineUserCircle } from "react-icons/hi2";
import {CiSearch} from 'react-icons/ci'
import { SpacedevContext } from '../context/context';
import { useContext, useState } from 'react';
import UserMenuDropdown from '../components/usermenudropdown';

const ReadArticleNav = () => {
    //get user info
    const {CurrentUser}=useContext(SpacedevContext)

    const userImage=CurrentUser?.photoURL

    //profile dropdown
    const[Dropdown, setDropdown]=useState(false)

    const NonUserAlert=()=>{
      alert("kindly login first ")
    }
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
        {CurrentUser?
        <button onClick={()=> setDropdown((prev)=>!prev)} className='m-1'>
          <Image 
            src={userImage} 
            alt='user' 
            width={200} 
            height={200}
            className=' w-11 h-auto p-[2px] rounded-full border border-transparent hover:border-indigo-500 overflow-hidden'
            />
            {/* user menu dropdown */}
            {Dropdown && (<UserMenuDropdown />)}
        </button>:
        <button onClick={NonUserAlert}>
          <HiOutlineUserCircle  size={32} color='#757575' className='lg:w-8 lg:h-8 w-7 h-7 cursor-pointer'/>
        </button>
        }
    </div>
    </div>
    </>
  )
}

export default ReadArticleNav
