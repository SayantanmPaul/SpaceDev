import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';

const Navbar = () => {
  return (
    <div className=' max-w-[1210px] sticky top-0 mx-auto z-10'>
      <div className='flex flex-row justify-between items-center '>
        <div className='w-44 lg:w-56 cursor-pointer'>
          <Image
          src={Logo}
          alt='spacedev'
          width={200}
          height={50}
          />
        </div>
         <div className=' flex gap-4 flex-row'>
            <button className=' hidden lg:block md:block cursor-pointer hover:underline '>
              Sign in
            </button>
            <button className=' bg-black text-white px-4 py-2 rounded-full text-sm lg:text-base md:text-base hover:scale-105 duration-500 cursor-pointer'>
              Get Started
            </button>
         </div>
      </div>
    </div>
  );
};

export default Navbar;
