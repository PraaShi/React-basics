import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState('false');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:3000/blogs',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            console.log(blog)
            setIsPending(false);
            // history.go(-1)
            history.push('/');
        })
    }
    return (
        <div className="Create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> blog title: </label>
                <input 
                    type ="text"required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter the title..">
                </input>
                <label> blog body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Enter the body..">
                </textarea>
                <label>blog author: </label>
                <select
                    value={ author }
                    onChange={(e) => setAuthor(e.target.author)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
      );
}
 
export default Create;