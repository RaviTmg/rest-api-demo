import { useState } from "react";


export function AddPost({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            body,
            userId
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <label>
                Body:
                <input
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </label>
            <label>
                User Id:
                <input
                    type="number"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                />
            </label>
            <button type="submit">Add Post</button>
        </form>
    );
}
