import Head from "next/head";

const first = ({ title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <div>
                <h1>First Blog page</h1>
            </div>
        </>
    );
};

export default first;

export async function getServerSideProps() {
    return {
        props: {
            title: 'Article Title',
            description: 'Article description'
        }
    }
}