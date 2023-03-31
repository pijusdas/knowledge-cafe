import React from 'react';

const Sidebar = ({title}) => {
    return (
        <div className='w-[30%] border-4 border-amber-200 p-3 text-center'>
            <h1>Spent time on read :</h1>
            <div>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Sidebar;