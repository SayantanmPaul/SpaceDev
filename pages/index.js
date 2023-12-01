import Navbar from '../components/navbar';

import StoryDesign from '../components/storydesign';
import MainContent from '../components/maincontent';
import FilterContent from '../components/filtercontent';

export default function App() {
  return (
    <>
      <div className=' flex flex-col gap-3'>
        <StoryDesign />
        <div className=' p-4 px-6 md:px-14'>
          <Navbar />
        </div>
        <div className="flex lg:flex-row justify-center flex-col-reverse lg:p-1 gap-3">
          <div className="flex flex-col p-2  px-6 md:px-14">
            <MainContent />
            <MainContent />
            <MainContent />
            <MainContent />
          </div>
          <div>
          <div className=" p-2 px-6 md:px-14 ">
            <FilterContent />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
