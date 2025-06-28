import posts from "../posts.json";
import Articel from "../components/Article";

function Homepage(){
    return(
        <>
            <h1>Simple blog</h1>
            {posts.map((blog)=> (
                    <Articel title={blog.title} tags={blog.tags} date={blog.date}/>
            ))}
        </>
    );
}

export default Homepage;