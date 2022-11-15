import React from 'react'
import {useNavigate, useSearchParams} from "react-router-dom"

function Comedian({singleComedian}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const userID = searchParams.get("user_id")

    function navigateToReviewForm(comedianID) {
        navigate(`/reviews/?id=${comedianID}/?user_id=${userID}`)
    }

    function navigateToComedianReviews(comedianID) {
        navigate(`/reviews/?id=${comedianID}`)
    }

    return (
        <div className='comedian'>
            <h3>{singleComedian.name}</h3>
            <p>Average Rating: {singleComedian.average_rating}</p>
            <p>Reviews: {singleComedian.review_count}</p>
            <p>{singleComedian.bio}</p>
            <button onClick={() => navigateToReviewForm(singleComedian.id)}>Leave a Review</button>
            <button onClick={() => navigateToComedianReviews(singleComedian.id)}>See Reviews</button>
        </div>
    )
}

export default Comedian