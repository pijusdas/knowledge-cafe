import React, { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {

    const [title,setTitle]= useState([]);

    
    const addToSideBar = (blog)=>{
      const mrk = blog.title
        setTitle(mrk=>[...mrk,blog.title])
    }

     

    return (
        <div className='flex p-7 gap-5'>
            <Blogs addToSideBar={addToSideBar}></Blogs>
            <Sidebar title={title}></Sidebar>
        </div>
    );
};

export default Home;