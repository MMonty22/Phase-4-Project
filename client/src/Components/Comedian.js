import React from 'react'
import {useNavigate, useSearchParams} from "react-router-dom"

function Comedian({singleComedian}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const comedianID = searchParams.get("comedian_id")
    const userID = searchParams.get("user_id")

    function navigateToReviewForm() {
        navigate(`/review/${userID}/${comedianID}`)
    }

    return (
        <div className='comedian'>
            <h3>{singleComedian.name}</h3>
            <p>{singleComedian.average_rating}</p>
            <p>{singleComedian.review_count}</p>
            <p>{singleComedian.bio}</p>
            <button onClick={navigateToReviewForm}>Leave a Review</button>
        </div>
    )
}

export default Comedian