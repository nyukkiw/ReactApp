import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {

    const Posts=useLoaderData()

    return (
        <>
            <h2>My blog posts</h2>
            {Posts.map((item, index) => (
              <div key={index}>
                <Link to={`/blog/${item.id}`}>- {item.title}</Link>
              </div>
            ))}
        </>
    )
}

export default Blog;