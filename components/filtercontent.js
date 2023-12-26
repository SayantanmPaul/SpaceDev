const FilterContent = ({post}) => {
  return (
    <>
    <div className="flex lg:flex-col lg:text-sm text-[14px] font-semibold text-slate-700 flex-row ]">
      Discover more what matters most to you
    </div>
    <div className="flex flex-col gap-2 w-full">
      <div className=' w-full h-[0.1em] bg-slate-200 '></div>
      <div  className=" flex flex-wrap gap-3 w-full">
        {post.map(posts=>(
          <div className=" bg-slate-200 px-2 p-1 rounded-md text-xs hover:bg-slate-300 duration-300 cursor-pointer text-neutral-500 w-auto  whitespace-nowrap" key={posts.id}>{posts.data.catagorypost}</div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FilterContent;
