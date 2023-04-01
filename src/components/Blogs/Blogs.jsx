import React, { useEffect, useState } from 'react';
import SingleBlogs from '../SingleBlogs/SingleBlogs';

const Blogs = ({ addToSideBar ,handleReadTime}) => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch('FakeBlogs.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
   }, [])

   return (
      <div className='w-[70%] gap-10'>
         {
            blogs.map(blog => <SingleBlogs key={blog.id} handleReadTime={handleReadTime} addToSideBar={addToSideBar} blog={blog}></SingleBlogs>)
         }
      </div>
   );
};

export default Blogs;