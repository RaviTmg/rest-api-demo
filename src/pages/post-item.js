export default function PostItem({ post }) {
    return (
        <div className="post" >
            <h4>
                {post.title}
            </h4>
            <p>
                {post.body}
            </p>
        </div>
    );
}