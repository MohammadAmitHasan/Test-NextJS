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

    const { params, req, res, query } = context;
    const { catagories } = params;

    console.log(req.headers.cookie, query)

    res.setHeader("Set-Cookie", "name=Muhammad Hasan")
    res.setHeader("Set-Cookie", "Occupation=Web Developer")



    const response = await fetch(`http://localhost:4000/news?category=${catagories}`)
    const data = await response.json();
    return {
        props: {
            articles: data,
            catagories
        }
    }
}