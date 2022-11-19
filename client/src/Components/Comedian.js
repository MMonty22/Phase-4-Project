import React from 'react'
import {useNavigate, useParams} from "react-router-dom"

function Comedian({singleComedian}) {
    const navigate = useNavigate()
    const {user_id} = useParams()
    //console.log('userID', userID)

    function navigateToReviewForm(comedianID) {
        navigate(`/reviews/id=${comedianID}/user_id=${user_id}`)
    }

    function navigateToComedianReviews(comedianID) {
        navigate(`/comedians/${comedianID}/reviews`)
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