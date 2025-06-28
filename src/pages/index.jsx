import { useState } from "react";
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

    return(
        <>
            <h1>Simple blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>

            {posts.map((props, index)=> (
                    <Articel {...props} key={index}/>
            ))}
        </>
    );
}

export default Homepage;