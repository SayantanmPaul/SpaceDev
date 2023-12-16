import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';
import { RiBallPenLine } from "react-icons/ri";
import SignInModel from './signinmodel';
import { useState } from 'react';
import { useContext } from 'react';
import { SpacedevContext } from '../context/context';
const Navbar = () => {
  //sign in model
  const [model, showModel]= useState(false)

  const closeModel=()=> showModel(false)

  const {CurrentUser}=useContext(SpacedevContext)
  console.log(CurrentUser);
  const userImage=CurrentUser? CurrentUser.photoURL: null;
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
         <div className=' flex lg:gap-4 gap-2 flex-row'>
          {CurrentUser? (
            <>
            <button className=' bg-black text-white px-4 py-3 rounded-full text-sm duration-500 cursor-pointer flex flex-row items-center gap-1 font-medium'>Write 
              <RiBallPenLine className=' text-white' size={20}/>
            </button>
            <button className='cursor-pointer'>
              <div className=' border hover:border-indigo-500 duration-300 p-[2px] rounded-full overflow-hidden'>
              <Image src={userImage} alt='user' width={200} height={200} className=' object-fill rounded-full overflow-hidden w-10 h-auto'/>
              </div>
            </button>
            
            </>
          ):(
            <>
            <button onClick={()=> showModel(true)} className=' hidden lg:block md:block cursor-pointer hover:underline text-sm '>
              Sign in
            </button>
            <div className=' absolute'>
            {model && <SignInModel closemodel={closeModel}/>}   
            </div> 
            <button onClick={()=> showModel(true)} className=' bg-black text-white px-4 py-3 rounded-full text-sm duration-500 cursor-pointer'>
              Get Started
            </button>
            </>
          )} 
         </div>
      </div>
        <div className=' bg-slate-300 h-[1px] w-full mt-3'></div>
      </div>
  );
};

export default Navbar;
