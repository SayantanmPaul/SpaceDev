import { useContext, useEffect, useState } from "react";
import ArticleMainComp from "../../mainpage/articlemain";
import ReactionsComp from "../../mainpage/reactions";
import ReadArticleNav from "../../mainpage/readArticleNav";
import SimilarPostComp from "../../mainpage/similarpost";
import { SpacedevContext } from "../../context/context";
import { useRouter } from "next/router";
import SignInModel from "../../components/signinmodel";

export default function AuthorPostPage() {

  //sign in model
  const [model, showModel] = useState(false)
  const closeModel = () => showModel(false)

  //get user info
  const { CurrentUser } = useContext(SpacedevContext)

  const state = Boolean(CurrentUser)

  const { posts, users } = useContext(SpacedevContext)
  const router = useRouter();
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    if (posts.length === 0) return
    //get the post id from the firebase 
    setPost(
      posts.find(post => post.id === router.query.slug)
    )

    setAuthor(
      (users.find(user => user.id === post.data?.author))
    );

  }, [post, posts, users, router.query.slug])

  return (
    <div className=" py-3 lg:max-w-6xl md:max-w-3xl max-w-full mx-auto px-2 left-0 right-0 justify-center absolute">
      {/* if user havent log in show this section */}
      {state == false &&
        <div className=" gap-2 flex flex-col">
          <div className=" flex justify-end ">
            <div className=" flex flex-row gap-4">
              <button
                onClick={() => showModel(true)}
                className=" bg-black text-xs text-white px-2 py-1 rounded-full ">
                Sign up
              </button>
              <button
                onClick={() => showModel(true)}
                className=" text-xs hover:underline " >
                Sign in
              </button>
              <div className=' fixed z-20'>
                {model && <SignInModel closemodel={closeModel} />}
              </div>
            </div>
          </div>
          <div className=' w-full h-[1px] bg-slate-200 block'></div>
        </div>}

      <ReadArticleNav />
      <div className=" my-2">
        <div className=' w-full h-[1px] bg-slate-200 block'></div>
      </div>
      <div className="max-w-2xl mx-auto">
        <ArticleMainComp post={post} author={author} />
        <div className="sticky bottom-0 bg-gradient-to-b from-transparent via-white to-white p-3 pt-10 z-10 ">
          <ReactionsComp post={post} />
        </div>
      </div>
      <div className=" max-w-2xl mx-auto">
        <div className=' w-full h-[1px] bg-slate-200 my-4'></div>
        <SimilarPostComp post={post} />
      </div>

    </div>

  )
}