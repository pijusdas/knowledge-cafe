import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import React from 'react';


const SingleBlogs = ({ blog }) => {
    console.log(blog)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-full' src= {blog.cover_image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex gap-6'>
                        <img className=" w-16 h-16 rounded-full" src={blog.author.image} alt="" />
                        <div>
                            <h1 className='font-bold  text-2xl'>{blog.author.name}</h1>
                            <p>{blog.publish_date}</p>
                        </div>
                    </div>
                    <div className=' text-gray-500 flex gap-3 items-center'>
                        <p className=' font-medium text-xl '>{blog.read_time}</p>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                </div>
                <h1></h1>
                 
            </div>
        </div>
    );
};


export default SingleBlogs;