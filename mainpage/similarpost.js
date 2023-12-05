import React from 'react'
import Image from 'next/image'
import storyimage1 from '../Images/unsplash1.jpg'
import storyimage2 from '../Images/C.jpg'
import authorimage from '../Images/author.jpg'
import { BsBookmarkPlus } from 'react-icons/bs';
const SimilarPostComp = () => {
    const post=[
        {
            title: 'Food Twin: Stress Testing the U.S. Food System',
            image: storyimage1,
            author:{
                name:'Cameron Kruse',
                authimage: authorimage
            }
        },
        {
            title: 'Frutiger Aero: When the Future Looked Optimistic',
            image: storyimage2,
            author:{
                name:'Mike Grindle',
                authimage: authorimage
            }
        },
        {
            title: 'The Long View',
            image: storyimage1,
            author:{
                name:'Vicki Tan',
                authimage: authorimage
            }
        },
    ]
    return (
        <div>
            <h2 className=' font-bold text-3xl pb-6'>You may also like</h2>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
            {post.map((recomamndedpost,index)=> (
                <div className=' flex flex-col gap-4' key={index}>
                    
                    <div className=' w-full h-auto rounded-md overflow-hidden '>
                        <Image src={recomamndedpost.image} width={500} height={200} alt='story image' priority/>
                    </div>
                    <div>
                        <p className=' font-bold leading-tight text-lg'>{recomamndedpost.title}</p>
                    </div>
                    <div className=' flex flex-row gap-2 items-center justify-between'>
                        <div className=' flex flex-row gap-2 items-center justify-center'>
                        <div className=' w-[28px] h-[28px] rounded-full overflow-hidden '>
                            <Image src={recomamndedpost.author.authimage} alt={recomamndedpost.author.name} width={200} height={200}/>
                        </div>
                        <div className=' flex flex-col'>
                        <p className=' text-sm font-medium font-serif'>{recomamndedpost.author.name}</p>
                        <p className='text-[10px] text-[#757575]'>recomamnded by spacedev</p>
                        </div>
                        </div>
                        <BsBookmarkPlus color='#757575'/>
                    </div>
                </div>
            ))}
        </div>
        </div>
      )

}
export default SimilarPostComp

