import Image from 'next/image';
import Logo from '../Images/SpaceDev.svg';

const Navbar = () => {
  return (
    <div className="flex justify-center gap-10 p-5 md:p-6 ">
      <div className="max-w-[1180px] flex-1 flex justify-between gap-10">
        <div className="flex items-center flex-start ">
          <Image
            className=" cursor-pointer object-contain"
            src={Logo}
            height={20}
            width={200}
          />
        </div>
        <div className="flex cursor-pointer items-center font-medium space-x-[22px]  text-gray-800">
          <div className=" lg:block md:block hidden">
            <a href="https://github.com/SayantanmPaul/SpaceDev">Source Code</a>
          </div>
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
