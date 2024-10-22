
import PropTypes from 'prop-types'; // ES6
import { GoBookmark } from "react-icons/go";

    
    const Blog = ({ blog, handleAddToBookmark }) => {
    
    const {title, cover, author, posted_date, author_img, reading_time} = blog;



    return (
        <div className='mb-20'>
            <img className='w-[400px] h-[400px] object-cover rounded-lg mb-10' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex gap-24'>
                <div className='flex justify-between items-center gap-3'>
                    <div className='w-[80px] h-[80px] p-1 rounded-full border-2'>
                    <img className='w-full h-full object-cover rounded-full' src={author_img} alt="" />

                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>{author}</h2>
                        <p className='text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl text-blue-600'><GoBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold mt-6'>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object,
    handleAddToBookmark: PropTypes.func
}


export default Blog;