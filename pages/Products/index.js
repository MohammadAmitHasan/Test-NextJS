import Link from "next/link"

const Products = ({ id = 1000 }) => {
    return <>

        <h1>
            <Link href={'/'}>Home</Link>
        </h1>
        <h2>
            <Link href={'/Products/1'}>
                Product 1
            </Link>
        </h2>
        <h2>
            <Link href={'/Products/2'} replace>
                Product 2
            </Link>
        </h2>
        <h2>
            <Link href={'/Products/3'}>
                Product 3
            </Link>
        </h2>

        <h2>
            <Link href={`/Products/${id}`}>
                {
                    <a>{id}</a>
                }
            </Link>
        </h2>

    </>
}

export default Products


