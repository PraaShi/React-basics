const BlogList = (props) => {//{blogs,title}
    const blogs = props.blogs; 
    const title = props.title;
    // const newone = props.handleDelete;
    return (  
       <div className="blog-list">
        <p>{title}</p>
        {blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>the author is {blog.author}</p>
                    <div className="delete">
                       {/* <button onClick={() => newone(blog.id)}>delete me!</button> */}
                    </div>
                </div>
            ))}
       </div>
    );
}
 
export default BlogList;