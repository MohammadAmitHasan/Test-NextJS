import Link from "next/link"

const news = ({ articles }) => {
    return <div>
        <h1>List of News</h1>

        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>
                            <Link href={`/news/${article.category}`}>
                                <a>
                                    {article.id} {article.title} | {article.category}
                                </a>
                            </Link>
                        </h2>
                        <hr />
                    </div>
                )
            })
        }

    </div>
}

export default news

export const getServerSideProps = async () => {
    console.log('Pre-rendering NewsArticleList')
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
            articles: data
        }
    }
}