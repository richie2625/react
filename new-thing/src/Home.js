import React, { useState } from 'react';
import BlogList from './BlogList'
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'my website', body:'something', author: 'mario', id:1 },
        {title: 'my website', body:'something', author: 'jack', id:2 },
        {title: 'my website', body:'something', author: 'richard', id:3 }
    ]);
    const handleDelete = (id) => { const newBlogs = blogs.filter (blog => blog.id !== id);
    setBlogs(newBlogs);
    }
    return ( <div className="home">
       <BlogList blogs={blogs} handleDelete={handleDelete}/>
         </div>);
}
export default Home;