import React, { useContext } from 'react'
import { SpacedevContext } from '../context/context'
const UserMenuDropdown = () => {
    const {HandleUserLogout}= useContext(SpacedevContext) 
  return (
    <div className=' flex flex-col absolute top-[4.7rem] right-[0.1rem] min-w-[130px] p-4 rounded-sm shadow-lg bg-white text-sm font-medium'>
        <ul className='flex flex-col gap-3 '>
            <button className=' w-full text-right hover:underline hover:text-indigo-700'>Profile</button>
            <a className=' w-full text-right  hover:underline hover:text-indigo-700' href='https://github.com/SayantanmPaul/SpaceDev/' target='_blank' rel='noopener noreferrer'>
                <button>Project Source Code</button>    
            </a>
            <button className=' w-full text-right  hover:underline hover:text-indigo-700' onClick={HandleUserLogout}>Logout</button>
        </ul>
    </div>
  )
}

export default UserMenuDropdown
