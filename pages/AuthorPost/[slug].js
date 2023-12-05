import ArticleMainComp from "../../mainpage/articlemain";
import ReactionsComp from "../../mainpage/reactions";
import ReadArticleNav from "../../mainpage/readArticleNav";
import SimilarPostComp from "../../mainpage/similarpost";

export default function AuthorPostPage(){

  const state=true
  return(
    <div className=" py-2 lg:max-w-[1192px] md:max-w-[696px] max-w-[90%] mx-auto left-0 right-0 justify-center absolute">
      {/* if user havent log in show this section */}
      {state==true && 
      <div className=" gap-2 flex flex-col">
        <div className=" flex justify-end ">
          <div className=" flex flex-row gap-4">
            <button className=" bg-black text-xs text-white px-2 py-1 rounded-full ">Sign up</button>
            <button className=" text-xs hover:underline " >Sign in</button>
          </div>
        </div>
        <div className=' w-full h-[1px] bg-slate-200 block'></div>  
      </div>}

      <ReadArticleNav/>
      <div className=" my-2">
        <div className=' w-full h-[1px] bg-slate-200 block'></div>
      </div>
      <div className=" ">
      <ArticleMainComp/>
      <div className="sticky bottom-0 bg-white pt-4 pb-2 ">
        <ReactionsComp/>
      </div>
      </div>
      <div className=" max-w-[680px] mx-auto">
        <div className=' w-full h-[1px] bg-slate-200 my-4'></div>
        <SimilarPostComp/> 
        </div>
      </div>
    
  )
}