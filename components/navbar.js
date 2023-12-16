import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';
import SignInModel from './signinmodel';
import { useState } from 'react';
const Navbar = () => {
  const [model, showModel]= useState(false)

  const closeModel=()=> showModel(false)
  return (
    <div>
      <div className='flex flex-row justify-between items-center mx-auto'>
        <div className='w-48 lg:w-56 cursor-pointer'>
          <Image
          src={Logo}
          alt='spacedev'
          width={200}
          height='auto'
          priority
          />
        </div>
         <div className=' flex gap-4 flex-row'>
            <button onClick={()=> showModel(true)} className=' hidden lg:block md:block cursor-pointer hover:underline text-sm '>
              Sign in
            </button>
            <div className=' absolute'>
            {model && <SignInModel closemodel={closeModel}/>}   
            </div> 
            <button onClick={()=> showModel(true)} className=' bg-black text-white px-4 py-3 rounded-full text-sm duration-500 cursor-pointer'>
              Get Started
            </button>
         </div>
      </div>
        <div className=' bg-slate-300 h-[1px] w-full mt-3'></div>
      </div>
  );
};

export default Navbar;
