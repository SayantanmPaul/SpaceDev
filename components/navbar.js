import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';
import { RiBallPenLine } from "react-icons/ri";
import SignInModel from './signinmodel';
import { useState } from 'react';
import { useContext } from 'react';
import { SpacedevContext } from '../context/context';
import UserMenuDropdown from './usermenudropdown';
import AddNewBlogModel from './addNewBlog';
import dynamic from 'next/dynamic';

const Navbar = () => {
  //sign in model
  const [model, showModel] = useState(false)
  const [writeBlogModel, showwriteBlogModel] = useState(false)

  const closeModel = () => showModel(!model)

  const closeEditBlogModal = () => showwriteBlogModel(false)
  //getting currrent loged in user data
  const { CurrentUser } = useContext(SpacedevContext)

  const [Dropdown, setDropdown] = useState(false)

  //user image
  const userImage = CurrentUser ? CurrentUser.photoURL : null;
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
          {CurrentUser ? (
            <>
              <div className=' flex flex-row gap-2 items-center'>
                <button
                  onClick={() => showwriteBlogModel(true)} className=' bg-black text-white px-4 py-3 rounded-full text-sm duration-500 cursor-pointer flex flex-row items-center gap-1 font-medium'>Write
                  <RiBallPenLine className=' text-white' size={20} />
                </button>

                <button onClick={() => setDropdown((prev) => !prev)} className='cursor-pointer'>
                  <div className=' border hover:border-indigo-500 duration-300 p-[2px] rounded-full overflow-hidden'>
                    <Image
                      src={userImage}
                      alt='user' width={200}
                      height={200}
                      className=' object-fill rounded-full overflow-hidden w-10 h-auto' />
                  </div>
                </button>
              </div>
              {Dropdown && (<UserMenuDropdown />)}
            </>
          ) : (
            <>
              <button onClick={() => showModel(true)} className=' hidden lg:block md:block cursor-pointer hover:underline text-sm '>
                Sign in
              </button>
              <div className='absolute'>
                {model && <SignInModel closemodel={closeModel} />}
              </div>
              <button onClick={() => showModel(true)} className=' bg-black text-white px-4 py-3 rounded-full text-sm duration-500 cursor-pointer'>
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
      <div className=' bg-slate-300 h-[1px] w-full mt-3'></div>

      {/* write blog modal */}
      <div className='absolute'>
        {writeBlogModel && CurrentUser && (
          <AddNewBlogModel closemodel={closeEditBlogModal} />
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });