import { useRouter } from 'next/router'

const Review = () => {
    const router = useRouter()
    const { productsid, reviewid } = router.query
    return (
        <div>
            <h1>Review: {reviewid} for product: {productsid}</h1>
        </div>
    );
};

export default Review;