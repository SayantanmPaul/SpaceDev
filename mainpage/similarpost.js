import React from 'react'
import Image from 'next/image'
import { BsBookmarkPlus } from 'react-icons/bs';
import { useContext } from 'react'
import { SpacedevContext } from '../context/context'
import Link from 'next/link';

const SimilarPostComp = () => {
    //get posts from the SpaceDev Context
    const { posts, users }= useContext(SpacedevContext)
    return (
        <div>
            <h2 className=' font-bold text-3xl pb-6'>You may also like</h2>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
            {posts.map((post,index)=> {
            //getting individual author info
            const postUser = users.find(user => user.id === post.data?.author);
            
            return(
                <>
                <Link href={`/AuthorPost/${post.id}`} as={`/AuthorPost/${post.id}`}>
                <div className=' flex flex-col lg:gap-4 gap-2 border rounded-md shadow-sm p-3 cursor-pointer' key={index}>
                    
                    <div className=' w-full h-auto rounded-md overflow-hidden '>
                        <div className=' w-full max-h-[200px]'>
                        <Image src={post.data.bannerImage} width={500} height={200} alt='story image' priority/>
                        </div>
                    </div>
                    <div>
                        <p className=' font-bold leading-tight text-lg'>{post.data.title}</p>
                    </div>
                    <div className=' flex flex-row gap-2 items-center justify-between'>
                        <div className=' flex flex-row gap-2 items-center justify-center'>
                        <div className=' w-[28px] h-[28px] rounded-full overflow-hidden '>
                            <Image src={postUser?.data?.imgurl} alt={postUser?.data?.name} width={200} height={200}/>
                        </div>
                        <div className=' flex flex-col'>
                        <p className=' text-sm font-medium font-serif'>{postUser?.data?.name}</p>
                        <p className='text-[10px] text-[#757575]'>recomamnded by spacedev</p>
                        </div>
                        </div>
                        <BsBookmarkPlus color='#757575'/>
                    </div>
                </div>
                </Link>
                </>
            )
            })}
        </div>
        </div>
)

}
export default SimilarPostComp

