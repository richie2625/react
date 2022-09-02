
const BlogList = ({blogs, handleDelete}) => {



return (
        <div className="blog-list">   
        {blogs.map((blog)=>(
          <div className="blog-preview" key={blog.id}>
    <h2>{blog.title}</h2>
    <p className="des">written by {blog.author}</p>
    <a href="#" onClick={()=> handleDelete(blog.id)} className="buttons">
    <img src="https://img.icons8.com/office/480/000000/cancel.png" width='20'/>
    </a>
          </div>
        ))}
        </div>
);
}

export default BlogList;