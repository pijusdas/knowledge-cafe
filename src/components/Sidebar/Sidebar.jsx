

const Sidebar = ({ title }) => {

    return (

        <div className='w-full  bg-gray-300  p-8 text-center'>
           
            <h1 className=' text-xl font-bold mb-4'>Bookmarked Blogs : {title.length}</h1>
            {
                title.map(t => <p className='bg-white p-4 mb-3 text-black'>{t}</p>)

            }
        </div>

    );
};

export default Sidebar;