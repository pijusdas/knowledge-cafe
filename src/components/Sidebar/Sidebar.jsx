import React, { useState } from 'react';

const Sidebar = ({ title }) => {


    return (

        <div className='w-[30%]  bg-gray-300  p-8 text-center'>
            <div className=' mb-5 bg-white p-4'>
                <h1 className=' text-violet-800'>Spent time on read:</h1>
            </div>

            <h1 className=' text-xl font-bold mb-4'>Bookmarked Blogs : {title.length}</h1>
            {
                title.map(t => <p className='bg-white p-4 mb-3 text-black'>{t}</p>)
            }
        </div>

    );
};

export default Sidebar;