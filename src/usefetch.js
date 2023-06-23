import { useState,useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending , setisPending] = useState(true);
    const [error , setError] = useState(null);


    useEffect(() => {
        // console.log(name);
        setTimeout(() =>{
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not found');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setisPending(false);
                    setError(null)
                })
                .catch(err => {
                    console.log(err.message);
                    setError(err.message);
                    setisPending(false);
                })
        }, 1000);
    }, [url]);
    return {data ,isPending,error}
}

export default UseFetch;