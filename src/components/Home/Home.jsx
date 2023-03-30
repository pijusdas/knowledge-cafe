import React from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='flex p-7 gap-5'>
            <Blogs></Blogs>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Home;