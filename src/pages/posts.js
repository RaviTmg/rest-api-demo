import { useEffect, useState } from "react";
import PostItem from "./post-item";
import { AddPost } from "./add-post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []);

    const handleSubmit = async (postData) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <h1>
                Today's Posts
            </h1>
            <AddPost
                onSubmit={handleSubmit}
            />
            <div>
                {
                    posts.map((post, index) => {
                        return (
                            <PostItem
                                post={post}
                                key={index}
                            />
                        );
                    })
                }

            </div>
        </div>
    )
}