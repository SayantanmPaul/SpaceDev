import Navbar from '../components/navbar';

import StoryDesign from '../components/storydesign';
import MainContent from '../components/maincontent';
import FilterContent from '../components/filtercontent';
import { SpacedevContext } from '../context/context';
import { useContext } from 'react';

export default function App() {
  
  const { posts }= useContext(SpacedevContext)
  return (
    <>
      <div className=' flex flex-col absolute left-0 right-0 gap-3 lg:max-w-[1192px] md:max-w-[696px] max-w-[97%] m-auto justify-center'>
        <StoryDesign />
        <div className='lg:py-3 py-4 top-0 sticky bg-white'>
          <Navbar />
        </div>  
        
        <div className="flex lg:flex-row flex-col-reverse gap-12 items-start">
          <div className="flex flex-col gap-6 ">
            {posts.map(post=>(
              <MainContent post={post} key={post.id}/>
            ))}
          </div>
          <div className="lg:sticky relative lg:top-24">
            <FilterContent />
            <div className=' w-full h-[1px] bg-slate-200 hidden lg:block'></div>
          </div>
        </div>
      </div>
    </>
  );
}
