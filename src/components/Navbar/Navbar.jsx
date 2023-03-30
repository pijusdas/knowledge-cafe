import React from 'react';

const Navbar = () => {
    return (
        <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
            </div>
            <div className="flex-none gap-2">
                <div className="flex justify-between gap-5">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contuct">Contact Us</a>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                        </div>
                    </label>                    
                </div>
            </div>
        </div>
        <hr className=' h-14  w-full  px-52'/>
        </>
    );
};

export default Navbar;