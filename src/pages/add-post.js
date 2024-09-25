import { useState } from "react";
import TextInput from "./components/text-input";


export default function AddPost({ onSubmit }) {
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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-5 rounded p-3 border border-gray-500"
        >
            <label>
                <div>
                    Title:
                </div>
                <TextInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <label>
                <div>
                    Body:
                </div>
                <TextInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </label>
            <label>
                <div className="mr-2">
                    User Id:
                </div>
                <TextInput
                    type="number"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                />
            </label>
            <button
                className="px-2 py-0.5 rounded-md bg-blue-700 text-white hover:bg-blue-900"
                type="submit"
            >Add Post</button>
        </form>
    );
}
