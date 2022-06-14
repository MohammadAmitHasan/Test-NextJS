import Link from "next/link";

const Posts = ({ posts }) => {
    return <div>
        <h1>Posts</h1>
        {
            posts?.map(post => <div key={post.id}>
                <h4>
                    <Link href={`/posts/${post.id}`}>
                        <a>
                            <span>{post.id}. </span> {post.title}
                        </a>
                    </Link>
                </h4>
            </div>)
        }
    </div>
};
export default Posts;

export const getStaticProps = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json();
    return {
        props: {
            posts: posts.slice(0, 10),
        }
    }
}