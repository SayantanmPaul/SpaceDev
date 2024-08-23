import Navbar from '../components/navbar';
import MainContent from '../components/maincontent';
import FilterContent from '../components/filtercontent';
import { SpacedevContext } from '../context/context';
import { useContext, useState } from 'react';

export default function App() {
  const { posts } = useContext(SpacedevContext)
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleFilter = (category) => {
    if (category) {
      const newFilteredPosts = posts.filter(post => post.data.catagorypost === category);
      setFilteredPosts(newFilteredPosts);
    } else {
      setFilteredPosts(posts); // Reset to all posts if no category selected
    }
  };

  return (
    <>
      <div className=' flex flex-col absolute left-0 right-0 gap-3 lg:max-w-6xl md:max-w-2xl max-w-[95%] m-auto justify-center'>
        <div className='lg:py-3 py-4 top-0 sticky bg-white z-10'>
          <Navbar />
        </div>

        <div className="flex lg:flex-row flex-col-reverse lg:gap-12 md:gap-8 gap-6 justify-between lg:items-start items-center">
          <div className="flex flex-col gap-6 w-full">
            {filteredPosts.length > 0 ? filteredPosts.map(post => (
              <MainContent post={post} key={post.id} />
            )) : posts.map(post => (
              <MainContent post={post} key={post.id} />
            ))}
          </div>
          <div className="lg:sticky relative lg:top-24 lg:max-w-md w-full">
            <FilterContent posts={posts} handleFilter={handleFilter} />
          </div>
        </div>
      </div>
    </>
  );
}
