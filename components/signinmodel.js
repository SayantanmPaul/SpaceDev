import React, { useContext, useEffect } from 'react'
import SideImage from '../Images/C.jpg'
import SpaceDev from '../Images/SpaceDev.svg'
import Image from 'next/image'
import Traveller from '../Images/traveller.png'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SpacedevContext } from '../context/context'

const SignInModel = ({closemodel}) => {

    const {HandleUserAuth}=useContext(SpacedevContext)
    //scroll hidden
    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="auto"
        }
    },[])
  return (
    <div className=' fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md flex items-center justify-center' onClick={closemodel}>
        <div className=' bg-white p-4 rounded-lg flex flex-row items-center justify-center relative gap-4 w-auto'>
            <div className=' rounded-md overflow-hidden hidden lg:block '>
                <Image src={SideImage} width={600} height={300} alt='sideImage' className=' object-cover w-[400px] h-[560px]'/>
            </div>
            <button className=' absolute right-0 top-0 p-2' onClick={closemodel}><AiOutlineCloseCircle size={22} className=' text-slate-400 p02'/></button>
            <div className=' flex flex-col items-center justify-between px-4 lg:gap-2 gap-6'>
                <Image src={SpaceDev} alt='logo' width={160} height={140} className=''/>
                <p className=' font-newsletter'>A space for devlopers and inspired engineers</p>
                <br className=' hidden lg:block'/>
                <br className=' hidden lg:block'/>
                <button onClick={HandleUserAuth} className=' bg-slate-100 hover:bg-slate-200 duration-300 text-black font-medium rounded-lg p-2 text-sm min-w-[240px] lg:min-w-[340px] flex flex-row items-center justify-center gap-2'><FcGoogle size={22}/> Sign in with Google </button>  
            </div>  
        
        </div>
        <Image src={Traveller} alt='travveler' width={400} height={400} className=' absolute bottom-0 -right-60 w-[800px]'/>
    </div>
  )
}

export default SignInModel

