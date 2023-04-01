import React, { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';

 

const Home = () => {

    const [title,setTitle]= useState([]);

    
    const addToSideBar = (blog)=>{
      const mrk = blog.title
       
    if(!title.includes(blog.title)){
        setTitle(mrk=>[...mrk,blog.title])
    }
    else{  
      toast("Allready Bookmarked!");

  }
       

        
    }

    return (
        <div className='flex p-7 gap-5'>
            <Blogs addToSideBar={addToSideBar}></Blogs>
            <Sidebar title={title}></Sidebar>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;