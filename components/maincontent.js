import Image from 'next/image';
import InitialImage from '../Images/unsplash1.jpg';
import Author from '../Images/author.jpg';
import { BsBookmarkPlus } from 'react-icons/bs';
import Link from 'next/link';

const MainContent = () => {
  return (
    <>
      <div className="flex justify-center gap-10 p-5">
        <div className="flex justify-between lg:px-7">
          <div className="flex lg:justify-start md:justify-center">
            <div className="wrapper flex lg:max-w-[45rem]  items-center gap-[22px]">
              <div className="postdetail flex-[2.5] flex flex-col">
                <div className="flex">
                  <div className="grid plaxe-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]">
                    <Image
                      src={Author}
                      alt="authoimage"
                      style={{ width: '30px', height: '23px' }}
                    />
                  </div>
                  <div className="authorname pl-[5px] pb-1 font-semibold text-[#2e2e2e] text-sm">
                    Wednesday Adams
                  </div>
                </div>
                <Link href={'/AuthorPost/123'}>
                  <h1 className="font-[770] lg:text-[22px] text-[17px]  text-[#292929] leading-7 font-poppins heading">
                    You should have these extentions in your vs code 2023
                  </h1>
                </Link>
                <div className="text-[#696969] hidden lg:block md:block heading">
                  So you want to make your boring vscode giveing your more
                  productivity, Don't worry I gotcha!
                </div>

                <div className="flex items-center flex-row  text-[#787878] ">
                  <div className="flex justify ">
                    <span className="my-2 text-[.8rem] flex ">
                      September 13 ·
                    </span>
                    <span className="my-2 text-[.8rem] flex pl-1 ">
                      4 min read ·
                    </span>
                    <span className=" mt-1 ml-1">
                      <button className="text-sm bg-slate-100 hover:bg-slate-200 py-1 px-2 rounded-full">
                        development
                      </button>
                    </span>
                  </div>
                  <span className="cursor-pointer pr-5 ml-[100px]">
                    <BsBookmarkPlus size={20} />
                  </span>
                </div>
              </div>
              <div className="">
                <Image
                  height={220}
                  width={220}
                  className="rounded-lg bg-auto "
                  src={InitialImage}
                  alt="headingimage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
