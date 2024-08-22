import { useState } from "react";

const FilterContent = ({ posts, handleFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const uniqueCategories = Array.from(
    new Set(posts.map(post => post.data.catagorypost))
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    handleFilter(category);
  };

  const handleClearFilter = () => {
    setSelectedCategory('')
    handleFilter('')
  }

  return (
    <div className="">
      <div className="flex lg:flex-col lg:text-sm text-[14px] font-semibold text-slate-700 flex-row">
        Discover more what matters most to you
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full h-[0.1em] bg-slate-200"></div>
        <div className="flex flex-wrap gap-3 w-full items-center">
          {uniqueCategories.map((category) => (
            <div
              className={`bg-slate-200 px-2 p-1 rounded-md text-xs hover:bg-slate-300 duration-300 cursor-pointer text-neutral-500 w-auto whitespace-nowrap ${selectedCategory === category ? "bg-slate-300" : ""
                }`}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
          {selectedCategory && <p onClick={handleClearFilter} className=" px-2 p-1 border rounded-md text-xs cursor-pointer text-neutral-500">clear filter</p>}
        </div>
      </div>
    </div>
  );
};

export default FilterContent;
