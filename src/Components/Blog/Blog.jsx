
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark,handleMarkAsRead }) => {
    
     const {id,title,cover,author, author_image, posted_date, reading_time, hashtags}= blog;
     console.log(hashtags)
    return (
        <div className='mb-20 space-y-4' >
            <img className='w-full mb-8' src={cover} alt={` cover img of the title ${title} `} />
            <div className='flex justify-between mb-2 '>
                <div className='flex'>
             <img className='w-14 h-12 rounded-full' src={author_image} alt="" />
             <div className=' ml-5'>
                <h3 className='text-2xl' > {author} </h3>
                <p> {posted_date} </p>
             </div>
                </div>

               
                <div>
                    <span> {reading_time} min read </span>
                    <button onClick={ ()=> handleAddToBookmark (blog) } className='ml-2 text-2xl text-red-400  '> <FaBookmark></FaBookmark> </button>

                </div>
            </div>
           <h2 className='text-4xl ' > {title} </h2> 
           <p>
            {
            
             hashtags.map((hash,idx) => <span key={idx} ><a href="">#{hash}</a> </span>)

            }
           </p>
           <button onClick={ ()=> handleMarkAsRead(id,reading_time)} className=' font-bold text-purple-600 underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
    
}

export default Blog;