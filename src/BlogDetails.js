import { useParams,useHistory } from 'react-router-dom';
import useFetch from './usefetch'




const BlogDetails = () => {
    // fetch('')
    const { id } = useParams();
    const { data:blog ,error , isPending } = useFetch('http://localhost:3000/blogs/' + id);
    const history = useHistory();

    const handleClick=() =>
    {
        fetch('http://localhost:3000/blogs/' + blog.id,{
            method:'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            <h2>blog id { id }</h2>
            { isPending && <div>loading...</div>}
            {error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
                
            )}

        </div>
     );
}
 
export default BlogDetails;