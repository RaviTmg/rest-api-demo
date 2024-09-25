export default function PostItem({ post }) {
    return (
        <div className="border border-gray-600 rounded p-2">
            <h4 className="text-xl font-semibold mb-2">
                {post.title}
            </h4>
            <p>
                {post.body}
            </p>
        </div>
    );
}