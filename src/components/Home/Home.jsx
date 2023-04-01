import React, { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import ReadTime from '../ReadTime/ReadTime';



const Home = () => {

    const [title, setTitle] = useState([]);
    const [times,setreadTimes]= useState(0);


    const previousReadtime = times

    function handleReadTime(blog){
        console.log(blog)
        const newReadTimes = blog.read_time
        const sum = previousReadtime+newReadTimes;
        setreadTimes(sum)
        
    }


    const addToSideBar = (blog) => {
        const mrk = blog.title

        if (!title.includes(blog.title)) {
            setTitle(mrk => [...mrk, blog.title])
        }
        else {
            toast("Allready Bookmarked!");

        }


    }

    return (
        <div className=' lg:flex p-7 gap-5'>
            <Blogs handleReadTime={handleReadTime}  addToSideBar={addToSideBar}></Blogs>
            <div>
                <ReadTime times={times}></ReadTime>
                <Sidebar title={title}></Sidebar>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;