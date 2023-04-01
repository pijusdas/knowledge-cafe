import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';



const SingleBlogs = ({ blog ,addToSideBar,}) => {
 
         
    

    return (
        <div className="card w-full bg-base-100 shadow-xl  mb-10">
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
                        <p className=' font-medium text-xl '>{blog.read_time} minutes</p>
                        <FontAwesomeIcon onClick={()=> addToSideBar(blog) ()} icon={faBookmark} />
                    </div>
                </div>
                <h1 className=' text-4xl font-bold mt-4'>{blog.title}</h1>

                 <p className=' my-4 text-gray-500'>#{blog.tags[0]}  #{blog.tags[1]}</p>

                 <p     className='  text-purple-600' href="Mark"><u>Mark as read</u></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};


export default SingleBlogs;