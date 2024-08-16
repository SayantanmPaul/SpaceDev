import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';
import { RiBallPenLine } from "react-icons/ri";
import SignInModel from './signinmodel';
import { useState } from 'react';
import { useContext } from 'react';
import { SpacedevContext } from '../context/context';
import UserMenuDropdown from './usermenudropdown';
import Modal from 'react-modal'
import { useRouter } from 'next/router';
import Link from 'next/link';
import WriteBlogModal from './writeblog';
//modal predefined text
Modal.setAppElement('#__next')

//css for modal background area
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: 0,
    overflow: 'scroll',
    borderRadius: '10px'
  },
  overlay: {
    backgroundColor: 'rgba(10,11,13, 0.65)',
    backdropFilter: 'blur(5px)',
  }
}
const Navbar = () => {
  const router = useRouter()
  //sign in model
  const [model, showModel] = useState(false)

  const closeModel = () => showModel(false)

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
                {/* the ?createNew=1 will return a Boolean weather true or false */}
                <Link href={'/?createNew=1'}>
                  <button className=' bg-black text-white px-4 py-3 rounded-full text-sm duration-500 cursor-pointer flex flex-row items-center gap-1 font-medium'>Write
                    <RiBallPenLine className=' text-white' size={20} />
                  </button>
                </Link>
                <button onClick={() => setDropdown((prev) => !prev)} className='cursor-pointer'>
                  <div className=' border hover:border-indigo-500 duration-300 p-[2px] rounded-full overflow-hidden'>
                    <Image src={userImage} alt='user' width={200} height={200} className=' object-fill rounded-full overflow-hidden w-10 h-auto' />
                  </div>
                </button>
              </div>

              {/* user menu dropdown */}
              {Dropdown && (<UserMenuDropdown />)}
            </>
          ) : (
            <>
              <button onClick={() => showModel(true)} className=' hidden lg:block md:block cursor-pointer hover:underline text-sm '>
                Sign in
              </button>
              <div className='absolute z-20'>
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
      <Modal
        isOpen={Boolean(router.query.createNew)}
        onRequestClose={() => router.push('/')}
        style={customStyles}
        className=''>
        <div className=' '>
          {CurrentUser ? <WriteBlogModal /> : <div className=' p-10'>
            <p>Error 404: Your aren’t signed in, kindly sign in first </p></div>}
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
