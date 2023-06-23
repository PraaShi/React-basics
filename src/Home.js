import { useState ,useEffect } from 'react';
import BlogList from './BlogList';
import UseFetch from './usefetch';
// import './Home.css';


const Home = () => {

    const {data:blogs , isPending ,error} = UseFetch('http://localhost:3000/blogs')
    // const [name,setName] = useState('praveena');//reactive
    // const [age,setage] = useState(20);

    // const handleclick = () => {
    //     console.log("hello everyone")
    // setName('shivaani');
    // setage(21);
    // }

    // const handleclickhere = (name,e) => {
    //     console.log('hello' + ' ' + name,e.target);
    // }
    // const [blogs, setBlogs] = useState(null);
    // [{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }]
   
    // const [isPending , setisPending] = useState(true);
    // const [name,setName] = useState('praveena');
    // const [error , setError] = useState(null);
    // const handleDelete = (id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlog);
    // }
  
    // useEffect(() => {
    //     // console.log(name);
    //     setTimeout(() =>{
    //         fetch('http://localhost:3000/blogs')
    //             .then(res => {
    //                 if(!res.ok){
    //                     throw Error('could not found');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log(data);
    //                 setBlogs(data);
    //                 setisPending(false);
    //                 setError(null)
    //             })
    //             .catch(err => {
    //                 console.log(err.message);
    //                 setError(err.message);
    //                 setisPending(false);
    //             })
    //     }, 1000);
    // }, []);

    return ( 
        <div className="Home">
           {error && <div> {error}</div>}
           {isPending && <div>loading...</div>}
           {blogs && <BlogList blogs={blogs} title = 'HELLO,WELCOME YOU ALL!!'/>} 
           {/* handleDelete={handleDelete} */}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = "MARIO'S BLOG" handleDelete={handleDelete}/> */}
           {/* <button onClick={() => setName("shivaani")}>click to change</button>
           <p>{name}</p> */}
            {/* {blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>the author is {blog.author}</p>
                </div>
            ))} */}
           {/* <div className="chumma">
            <button>Click me!</button>
           </div> */}
           
            {/* <h2>Home page</h2>
            <p>{ name } is {age} year old</p>
            <button onClick = {handleclick}>click me</button>
            <button onClick = {(e) => {
                handleclickhere('prashi',e)
            }}>click me here</button> */}
        </div>
        
     );
}
 
export default Home;