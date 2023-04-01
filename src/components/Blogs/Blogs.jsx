import React, { useEffect, useState } from 'react';
import SingleBlogs from '../SingleBlogs/SingleBlogs';

const Blogs = ({addToSideBar}) => {
     const [blogs,setBlogs]= useState([]);
     const [blog,setblog]= useState([])

     useEffect(()=>{
        fetch('FakeBlogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
     },[])



     const handleReadTime = (blog)=>{
          const previousReadtime = JSON.parse(localStorage.getItem('read-time')) 
        if(previousReadtime){
            const newTime = previousReadtime+blog.read_time;
            localStorage.setItem('read-time',newTime)
        }
        else{

            localStorage.setItem('read-time',blog.read_time)
        }
     }

    return (
        <div className='w-[70%] gap-10'>
             {
                blogs.map(blog =>   <SingleBlogs handleReadTime={handleReadTime} addToSideBar={addToSideBar} blog={blog}></SingleBlogs>)
             }
        </div>
    );
};

export default Blogs;