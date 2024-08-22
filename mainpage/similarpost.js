import React from 'react'
import Image from 'next/image'
import { BsBookmarkPlus } from 'react-icons/bs';
import { useContext } from 'react'
import { SpacedevContext } from '../context/context'
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SimilarPostComp = ({ post }) => {
    
    const { posts, users } = useContext(SpacedevContext)
    const [randomPost, setRandomPost] = useState([])

    useEffect(() => {
        // randomly stack the post
        let randomPosts = posts.filter(p => p.id !== post.id);
        for (let i = randomPosts.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [randomPosts[i], randomPosts[j]] = [randomPosts[j], randomPosts[i]];
        }
        // posts able to see max to only 4
        setRandomPost(randomPosts.slice(0, 4));
    }, [posts, post.id]);

    return (
        <div>
            <h2 className=' font-bold text-3xl pb-6'>You may also like</h2>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                {randomPost.map((post, index) => {
                    const postUser = users.find(user => user.id === post.data?.author);
                    return (
                        <div className=' flex flex-col lg:gap-4 gap-2 border rounded-xl shadow-sm overflow-hidden group' key={index}>
                            <div className=' w-full h-full overflow-hidden '>
                                <Image
                                    src={post.data.bannerImage}
                                    width={600}
                                    height={600}
                                    alt='story image'
                                    priority
                                    className=' w-full h-48 object-cover group-hover:scale-110 duration-300 ease-in-out'
                                />
                            </div>
                            <div className='px-3 pb-3 flex flex-col gap-1'>
                                <Link href={`/post/${post.id}`} >
                                    <p className=' font-bold leading-tight text-lg line-clamp-2 hover:underline'>
                                        {post.data.title}
                                    </p>
                                </Link>
                                <div className='flex flex-row justify-between items-center w-full '>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <Image
                                            src={postUser?.data?.imgurl}
                                            alt={postUser?.data?.name}
                                            width={200}
                                            height={200}
                                            className='w-8 h-8 rounded-full border'
                                        />
                                        <div className='flex flex-col'>
                                            <p className='font-medium text-sm text-zinc-600'>{postUser?.data?.name}</p>
                                            <p className='text-xs text-[#757575]'>{post?.data?.postLength} mins to read</p>
                                        </div>
                                    </div>
                                    <BsBookmarkPlus color='#757575' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default SimilarPostComp

