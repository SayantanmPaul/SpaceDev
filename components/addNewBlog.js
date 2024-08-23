import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Logo from '../Images/rocket.svg'
import Image from 'next/image'
import { SpacedevContext } from '../context/context'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'next/router'

let Editor = dynamic(() => import("./editor/editor"), {
    ssr: false,
});

const AddNewBlogModel = ({ closemodel }) => {

    const route = useRouter()

    const { register, formState: { errors, isSubmitting }, handleSubmit, setValue, trigger } = useForm({
        defaultValues: {
            title: '',
            brief: '',
            bannerImage: '',
            selectedCategory: '',
            minutesToRead: '',
            content: ''
        }
    })

    const { CurrentUser, category: availableCategories } = useContext(SpacedevContext)

    const [step, setStep] = useState(1)
    const [direction, setDirection] = useState("");
    const [isClosing, setIsClosing] = useState(false);
    const [content, setContent] = useState('')
    const [isAddingCategory, setIsAddingCategory] = useState(false)

    const nextStep = async () => {
        const isValid = await trigger(['title', 'brief', 'bannerImage', 'selectedCategory', 'minutesToRead']);

        if (isValid) {
            setDirection("slide-left");
            setTimeout(() => {
                setStep(2);
                setDirection("");
            }, 300);
        }
    };

    const prevStep = () => {
        setDirection("slide-right");
        setTimeout(() => {
            setStep(1);
            setDirection("");
        }, 300);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            closemodel();
        }, 300);
    };

    const onSubmit = async (data) => {
        try {
            const categoryQuery = query(collection(db, 'category'), where('topicName', '==', data.selectedCategory));
            const categorySnapshot = await getDocs(categoryQuery);

            if (categorySnapshot.empty) {
                await addDoc(collection(db, 'category'), {
                    topicName: data.selectedCategory
                });
            }
            await addDoc(collection(db, 'blogs'), {
                title: data.title,
                brief: data.brief,
                bannerImage: data.bannerImage,
                topic: data.selectedCategory,
                postLength: Number(data.minutesToRead),
                body: data.content,
                datePosted: new Date().toISOString(),
                author: CurrentUser.email,
                likes: 0,
                likedBy: []
            });
            alert('Your blog post has been published!🎉')
            closemodel();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        register('content', { required: "Content is required" });
    }, [register]);


    const handleEditorChange = (editorData) => {
        setContent(editorData);
        setValue('content', editorData);
    };

    return (
        <div className=' fixed top-0 left-0 right-0 bottom-0 backdrop-brightness-50 backdrop-blur flex items-center justify-center shadow-2xl'>
            <div className={`modal-container lg:rounded-3xl overflow-hidden flex flex-col lg:h-auto h-full max-w-5xl w-full bg-white p-8 gap-6 overflow-y-scroll no-scrollbar ${isClosing ? 'animate-fade-slideout' : 'animate-fade-slideup'} `}>
                <div className=' flex flex-row gap-2 items-center'>
                    <h1 className='lg:text-4xl text-[26px] font-newsletter text-indigo-700'>{step === 1 ?
                        "Thinking a new Blog ?" :
                        "Let's start with your blog"}
                    </h1>
                    <Image
                        src={Logo}
                        alt='logo'
                        width={100}
                        height={100}
                        className='w-12 h-12'
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 w-full'>
                    <div className={`step-container ${direction}`}>
                        {step === 1 && (
                            <div className='step-content flex flex-col gap-8 h-full justify-between w-full'>
                                <div className='flex flex-col gap-1'>
                                    <input
                                        type="text"
                                        placeholder='Title*'
                                        {...register('title', {
                                            required: "title is required"
                                        })}
                                        onChange={() => trigger('title')}
                                        className='outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-3xl text-xl font-newsletter focus:border-indigo-400 duration-300'
                                    />
                                    {errors.title && (
                                        <p className='text-rose-500 text-sm'>{errors.title.message}</p>
                                    )}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <input
                                        type="url"
                                        placeholder='banner image url *'
                                        {...register('bannerImage', {
                                            required: 'a banner image is required',
                                        })}
                                        onChange={() => trigger('bannerImage')}
                                        className='outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-xl font-newsletter focus:border-indigo-400 duration-300'
                                    />
                                    {errors.bannerImage && (
                                        <p className='text-rose-500 text-sm'>{errors.bannerImage.message}</p>
                                    )}
                                </div>
                                <div className='flex flex-col lg:flex-row gap-4 w-full items-start justify-between'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <input
                                            type="text"
                                            placeholder='add new category *'
                                            {...register('selectedCategory', {
                                                required: 'please provide a relevant category'
                                            })}
                                            onChange={() => trigger('selectedCategory')}
                                            className='outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter focus:border-indigo-400 duration-300  w-full'
                                        />
                                        {errors.selectedCategory && (
                                            <p className='text-rose-500 text-sm'>{errors.selectedCategory.message}</p>
                                        )}
                                    </div>
                                    <div className='flex flex-col gap-2 items-end w-full'>
                                        <div className='flex flex-row gap-4 w-full'>
                                            <span className=' min-w-fit text-md font-newsletter '>Estimated time to read :</span>
                                            <input
                                                type="number"
                                                placeholder='minutes to read *'
                                                {...register('minutesToRead', {
                                                    required: 'the field is required'
                                                })}
                                                onChange={() => trigger('minutesToRead')}
                                                className='outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter focus:border-indigo-400 duration-300  w-full'
                                            />
                                        </div>
                                        {errors.minutesToRead && (
                                            <p className='text-rose-500 text-sm'>{errors.minutesToRead.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <textarea
                                        type="text"
                                        rows={5}
                                        placeholder='A brief of your blog *'
                                        {...register('brief', {
                                            required: 'brieft is required'
                                        })}
                                        onChange={() => trigger('brief')}
                                        className='outline-none placeholder:text-neutral-300 border-2 p-4 border-slate-200 text-xl font-newsletter focus:border-indigo-400 duration-300 rounded-xl'
                                    />
                                    {errors.brief && (
                                        <p className='text-rose-500 text-sm'>{errors.brief.message}</p>
                                    )}
                                </div>
                                <div className='flex flex-row justify-between w-full '>
                                    <button
                                        type='button'
                                        onClick={handleClose}
                                        className='px-4 py-2 rounded-md bg-slate-100 border font-newsletter text-sm'>cancel
                                    </button>
                                    <button
                                        type='button'
                                        onClick={nextStep}
                                        className='px-4 py-2 rounded-md border font-newsletter  text-white bg-black flex items-center'>let&apos;s start writting
                                        <ArrowRight className='w-5 h-5 ml-2' />
                                    </button>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className='step-content w-full flex flex-col gap-6'>
                                <div className='h-96 w-full container border rounded-lg p-5 overflow-y-scroll overflow-hidden' id='editorjs'>
                                    <Editor
                                        data={content}
                                        onChange={handleEditorChange}
                                        holder="editor_create"
                                    />
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <button
                                        onClick={prevStep}
                                        className='bg-slate-200 border p-3 lg:text-md text-sm rounded-lg font-medium  px-4 overflow-hidden font-newsletter' type='button'>
                                        back
                                    </button>

                                    <button
                                        type='submit'
                                        className='px-4 py-2 rounded-md border font-newsletter  text-white bg-black flex items-center'
                                    >
                                        Submit {" "}🎉
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNewBlogModel
