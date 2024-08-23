import React, { useContext, useEffect, useState } from 'react'
import SpaceImg from '../Images/10838001_19333449.jpg'
import SpaceDev from '../Images/rocket.svg'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
import { SpacedevContext } from '../context/context'

const SignInModel = ({ closemodel }) => {
    const { HandleUserAuth } = useContext(SpacedevContext)

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            closemodel();
        }, 300);
    };

    return (
        <div className=' fixed top-0 left-0 right-0 bottom-0 backdrop-brightness-50 backdrop-blur flex items-center justify-center shadow-2xl z-20'>
            <div className={`lg:rounded-3xl overflow-hidden flex lg:flex-row flex-col lg:h-[756px] h-full max-w-6xl w-full bg-[#FFE6C9] lg:p-2 modal-container ${isClosing ? 'animate-fade-slideout' : 'animate-fade-slideup'}`}>
                <Image
                    src={SpaceImg}
                    width={500}
                    height={500}
                    alt='sideImage'
                    priority
                    placeholder='blur'
                    className='lg:w-3/5 w-full h-full object-cover object-center lg:rounded-l-2xl  lg:rounded-tr-none'
                />
                <div className='w-full lg:h-full h-4/5 bg-white flex flex-col items-center justify-center overflow-hidden lg:rounded-r-2xl rounded-b-2xl lg:rounded-bl-none'>
                    <div className='flex flex-col gap-4 max-w-md mb-2'>
                        <Image
                            src={SpaceDev}
                            alt='logo'
                            width={200}
                            height={200}
                            className='w-16 h-15'
                        />
                        <div className='flex flex-col space-y-2 text-[#525252]'>
                            <p className='lg:text-3xl text-[30px] font-bold font-newsletter'>Login to your Account</p>
                            <p className='font-semibold text-sm font-newsletter'>Share your thoughts everyday . . . </p>
                        </div>
                        <button onClick={HandleUserAuth} className=' border bg-[#FFE6C9] hover:bg-[#fbdcb9] duration-300 text-[#828282] font-medium rounded-lg p-2 text-sm w-full flex flex-row items-center justify-center gap-2'>
                            <FcGoogle size={22} />
                            Sign in with Google
                        </button>
                        {/* <p className='text-xs font-newsletter text-[#cbcaca] text-center'>------------- or Sign in with Email ------------- </p> */}
                        <button onClick={handleClose} className=' border border-[#FFE6C9] hover:bg-[#fff0df] duration-300 text-[#b4a5a5] hover:text-[#525252] font-semibold font-newsletter rounded-lg p-2 text-sm min-w-[240px] lg:min-w-96 flex flex-row items-center justify-center gap-2'>
                            {/* <FcGoogle size={22} /> */}
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInModel

