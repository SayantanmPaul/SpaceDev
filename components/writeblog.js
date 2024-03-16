import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from '../Images/rocket.svg'
import Image from 'next/image'
import { SpacedevContext } from '../context/context'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'next/router'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import { GoBold } from "react-icons/go";
import Code from '@tiptap/extension-code'
import { FaCode } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import Underline from '@tiptap/extension-underline'
import { ImUnderline } from "react-icons/im";
import BulletList from '@tiptap/extension-bullet-list'
import { MdFormatListBulleted } from "react-icons/md";
import ListItem from '@tiptap/extension-list-item'

const WriteBlogModal = () => {

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Code,
      Underline,
      BulletList,
      ListItem
    ],
    content: '<p>Start write your content here</p> ',
    onUpdate: ({ editor }) => {
      setBody(editor.getHTML())
    },
    rows: 10
  })

  const {CurrentUser}=useContext(SpacedevContext)

  const[title,setTitle]=useState('')
  const[brief,setBrief]=useState('')
  const[category,setCategory]=useState('')
  const[postlength,setPostLength]=useState('')
  const[bannerImage,setBannnerImage]=useState('')
  const[body,setBody]=useState('')

  const route=useRouter()


  //add data to firebase storage via user email 
  const addPostToFireStore=async event=>{
    event.preventDefault()

    await addDoc(collection(db, 'blogs'),{
      body: body,
      brief: brief,
      bannerImage: bannerImage,
      topic: category,
      postLength: Number(postlength),
      title: title,
      datePosted: new Date().toISOString(),
      author: CurrentUser.email
    })

    alert('Your blog post has been published!🎉')

    route.push('/') 
  }

  useEffect(() => {
    if (editor && body !== editor.getHTML()) {
      editor.commands.setContent(body)
    }
  }, [body, editor])

  if (!editor) {
    return null
  }

  return (
    <div className=' lg:min-w-[1024px] md:min-w-[624px] min-w-[364px] max-h-[100vh] top-5 lg:p-10 md:px-8 py-8 px-4 gap-4 flex flex-col '>
      <div className=' flex flex-row gap-2 items-center'>

        <h1 className=' lg:text-[44px] text-3xl font-newsletter text-indigo-700'>Thinking a new Blog ?</h1>
        <div className=' md:w-[52px] lg:w-[70px] w-[70px] '>
          <Image src={Logo} alt='logo' width={100} height={100}/>
        </div>
        
      </div>
      <form onSubmit={addPostToFireStore}>

        {/* title  */}
        <div className='w-full max-w-full py-6'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-4xl text-2xl font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="Title *"
        value={title}
        onChange={event=>setTitle(event.target.value)}
      />
        </div>

        {/* brief */}
        <div className='w-full max-w-full py-4'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-2xl text-lg font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="a brief of your blog *"
        value={brief}
        onChange={event=>setBrief(event.target.value)}
      />
        </div>

        {/* bannerImage of the post  */}
        <div className='w-full max-w-full py-4'>
        <input
        className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 lg:text-xl text-lg font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="text"
        required
        placeholder="provide banner image url *"
        value={bannerImage}
        onChange={event=>setBannnerImage(event.target.value)}
      />
        </div>
        <div className=' flex lg:flex-row  flex-col gap-3'>

          {/* catagory/type of post */}
          <div className='w-full max-w-full py-4'>
          <input
          className="w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
          type="text"
          required
          placeholder="catagory *"
          value={category}
        onChange={event=>setCategory(event.target.value)}
        />
        </div>
        <div className='w-full max-w-full lg:p-4 pb-4'>

          {/* post read length in minutes  */}
        <div className=' flex lg:flex-row flex-col gap-4'>
          <span className=' min-w-fit text-md font-newsletter '>Estimated time to read :</span>
          <input
        className=" w-full bg-transparent font-normal text-neutral-950 outline-none placeholder:text-neutral-300 border-b-2 border-slate-200 text-md font-newsletter placeholder:font-newsletter focus:border-indigo-400 duration-300"
        type="number"
        required
        placeholder="minutes to read"
        value={postlength}
        onChange={event=>setPostLength(event.target.value)}
      />
        </div>
        </div>
        </div>
        {/* body text editor section */}

        <div className=' border-[2px] border-slate-300 rounded-md'>
        {/* bold text toggle */}
        <div className=' p-1 flex flex-row gap-2 w-full'>
        <button
        onClick={() => {
          if (editor.isActive('bold')) {
            editor.chain().focus().unsetBold().run()
          } else {
            editor.chain().focus().toggleBold().run()
          }
        }}
        className={editor.isActive('bold') ? 'is-active' : ''}
        > 
          <div className={`p-2 rounded-md ${editor.isActive('bold')? 'bg-slate-300 ': 'bg-slate-100'} duration-100 `}>
            <GoBold size={18} />
          </div>
        </button>

        {/* Italic text toggle */}
        <button
        onClick={() => {
          if (editor.isActive('italic')) {
            editor.chain().focus().unsetItalic().run()
          } else {
            editor.chain().focus().toggleItalic().run()
          }
        }}
        className={editor.isActive('italic') ? 'is-active' : ''}
        > 
          <div className={`p-2 rounded-md ${editor.isActive('italic')? 'bg-slate-300 ': 'bg-slate-100'} duration-100 `}>
            <FaItalic size={18} />
          </div>
        </button>
        
        {/* Underline text toggle */}
        <button
        onClick={() => {
          if (editor.isActive('underline')) {
            editor.chain().focus().unsetUnderline().run()
          } else {
            editor.chain().focus().toggleUnderline().run()
          }
        }}
        className={editor.isActive('underline') ? 'is-active' : ''}
        > 
          <div className={`p-2 rounded-md ${editor.isActive('underline')? 'bg-slate-300 ': 'bg-slate-100'} duration-100 `}>
            <ImUnderline size={18} />
          </div>
        </button>
        
        {/* code text toggle */}
        <button
        onClick={() => {
          if (editor.isActive('code')) {
            editor.chain().focus().unsetCode().run()
          } else {
            editor.chain().focus().toggleCode().run()
          }
        }}
        className={editor.isActive('code') ? 'is-active' : ''}
        > 
          <div className={`p-2 rounded-md ${editor.isActive('code')? 'bg-slate-300 ': 'bg-slate-100'} duration-100 `}>
            <FaCode size={18} />
          </div>
        </button>

        {/* text bullet list toggle */}
        <button
        onClick={() => {
          if (editor.isActive('bulletList')) {
            editor.chain().focus().liftListItem().run()
          } else {
            editor.chain().focus().toggleBulletList().run()
          }
        }}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
        > 
          <div className={`p-2 rounded-md ${editor.isActive('bulletList')? 'bg-slate-300 ': 'bg-slate-100'} duration-100 `}>
            <MdFormatListBulleted size={18} />
          </div>
            </button>
            </div>
        </div>
        <div className='w-full max-w-full py-4'>
          <EditorContent  editor={editor} className=' w-full border p-6 focus-visible:border-gray-500 font-newsletter border-gray-300 rounded -md'/>
          
        </div>

        <div className=' py-4 '>
          <button className='lg:w-auto w-full max-w-full' type='submit' onSubmit={addPostToFireStore}>
            <p className=' bg-black text-white p-3 lg:text-md text-sm  rounded-lg font-medium  lg:px-6 px-3 overflow-hidden'>Submit your article</p>
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default WriteBlogModal
