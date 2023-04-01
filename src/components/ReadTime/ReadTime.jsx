import React, { useState } from 'react';

const ReadTime = ({times}) => {

    const updatReadTime = localStorage.getItem('read-time');
    return (
        <>
             <div className=' mb-5 bg-gray-300 p-4'>
                <h1 className=' text-violet-800 text-base font-bold'>Spent time on read:{times}</h1>      
            </div>
        </>
    );
};

export default ReadTime;