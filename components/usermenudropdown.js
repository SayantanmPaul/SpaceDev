import React from 'react'
import Link from 'next/link'
const UserMenuDropdown = () => {
    
  return (
    <div className=' flex flex-col absolute top-[4.7rem] right-[0.1rem] min-w-[130px] p-4 rounded-sm shadow-lg bg-white text-sm font-medium '>
        <ul className='flex flex-col gap-3 '>
            <button>Profile</button>
            <Link href='https://github.com/SayantanmPaul/SpaceDev/'>
                <button>Project Source Code</button>    
            </Link>
            <button>Logout</button>
        </ul>
    </div>
  )
}

export default UserMenuDropdown
