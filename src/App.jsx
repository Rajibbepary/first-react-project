
import { useState } from 'react'
import './App.css'
import Blogs from './componate/Blogs/Blogs'
import Booksmarks from './componate/Booksmarks/Booksmarks'
import Header from './componate/Header/Header'

function App() {
 const [bookmarks, setBookmarks] = useState([]);

 const handleAddToBookmark = blog =>{
    const newBookmarsk = [...bookmarks, blog]
    setBookmarks(newBookmarsk)
 }


  return (
    <>
      
      <Header></Header>
      <div className='md:flex w-11/12 mx-auto mt-5'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Booksmarks bookmarks={bookmarks}></Booksmarks>
      </div>
      
    </>
  )
}

export default App
