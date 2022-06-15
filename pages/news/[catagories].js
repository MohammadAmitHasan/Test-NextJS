const catagories = ({ articles, catagories }) => {
    return <div>
        <h1>Showing articles of catagories {catagories}</h1>
        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title}
                        </h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                )
            })
        }
    </div>
}
export default catagories

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { catagories } = params;
    const res = await fetch(`http://localhost:4000/news?category=${catagories}`)
    const data = await res.json();
    return {
        props: {
            articles: data,
            catagories
        }
    }
}