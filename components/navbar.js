import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';

const Navbar = () => {
  return (
    <div className="flex justify-center gap-10 p-5 md:p-6 ">
      <div className="max-w-7xl flex-1 flex justify-between gap-10">
        <div className="flex items-center flex-start lg:pl-[40px] ">
          <Image
            className=" cursor-pointer object-contain"
            src={Logo}
            height={30}
            width={190}
          />
        </div>
        <div className="flex cursor-pointer items-center font-medium space-x-[22px]  text-gray-800">
          <div className=" lg:block md:block hidden">Source Code</div>
          <div className=" lg:block md:block hidden">Blogs</div>
          <div>Sign In</div>
          <div className="transition ease-in-out delay-30 bg-black text-white py-2 px-4 rounded-full scale-80 hover:scale-110 hover:bg-black duration-300">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
