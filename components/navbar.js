import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between items-center mx-auto'>
        <div className='w-48 lg:w-56 cursor-pointer'>
          <Image
          src={Logo}
          alt='spacedev'
          width={200}
          height={50}
          />
        </div>
         <div className=' flex gap-4 flex-row'>
            <button className=' hidden lg:block md:block cursor-pointer hover:underline text-sm '>
              Sign in
            </button>
            <button className=' bg-black text-white px-4 py-2 rounded-full text-sm md:text-base hover:scale-105 duration-500 cursor-pointer'>
              Get Started
            </button>
         </div>
      </div>
        <div className=' bg-slate-300 h-[1px] w-full mt-3'></div>
      </div>
  );
};

export default Navbar;
