import Navbar from '../components/navbar';

import StoryDesign from '../components/storydesign';
import MainContent from '../components/maincontent';
import FilterContent from '../components/filtercontent';

export default function App() {
  return (
    <>
      <div>
        <StoryDesign />
        <div className="md:px-6">
          <Navbar />
        </div>
        <div className="flex lg:flex-row justify-center flex-col-reverse lg:p-1  ">
          <div className="flex flex-col sm:grid-cols-2 md:px-14 md:py-2 p lg:grid-col ">
            <MainContent />
            <MainContent />
            <MainContent />
            <MainContent />
          </div>
          <div className="flex justify-center">
            <div className=" lg:h-full lg:w-[1px] lg:bg-slate-300"></div>
          </div>
          <div className="flex justify-center">
            <FilterContent />
          </div>
        </div>
      </div>
    </>
  );
}
