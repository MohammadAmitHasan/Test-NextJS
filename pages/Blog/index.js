import Head from "next/head";
import Footer from "../../Components/footer";

const Blog = () => {
    return (
        <div>
            <h1>This is Blog index page</h1>
        </div>
    );
};

export default Blog;

Blog.getLayout = function PageLayout(page) {
    return (
        <>
            <Head>
                <title>Blog Page</title>
                <meta name="description" content="NextJS Learning" />
            </Head>
            {page}
            <Footer />
        </>
    )
}