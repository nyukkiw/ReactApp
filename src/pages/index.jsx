import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Articel from "../components/Article";
import Search from "../components/Search";

function Homepage(){
    const [posts, setPosts]=useState(postsData)
    const [totalPosts, setTotalPosts]=useState(0);
    
    const onSearchChange=(value)=>{
        const filteredPosts = postsData.filter(item=>item.title.includes(value));
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };

    

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setExternalPosts(json))
       
    }, []);

    return(
        <>
            <h1>Simple blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>

            {posts.map((props, index)=> (
                    <Articel {...props} key={index}/>
            ))}
            <hr />
            <h2>External posts</h2>

        </>
    );
}

export default Homepage;