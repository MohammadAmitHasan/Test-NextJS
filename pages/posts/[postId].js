const Post = ({ post }) => {
    console.log(post)
    return <div>
        <h1>Id: {post.id}</h1>
        <h4>{post.title}</h4>
        <p>
            {post.body}
        </p>
    </div>
}

export default Post

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}