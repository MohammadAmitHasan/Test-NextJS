import { useRouter } from 'next/router'

const Post = ({ post }) => {

    // Required  to build in case of fallback true
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

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
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map(post => {
        return {
            params: { postId: `${post.id}` }
        }
    })
    return {
        // paths: [],
        // fallback: 'blocking'
        paths,
        fallback: true,
    }
}
export const getStaticProps = async (context) => {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post: data
        }
    }
}