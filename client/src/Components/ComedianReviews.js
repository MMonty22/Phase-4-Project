import React from "react";
import {useParams} from "react-router-dom"

function ComedianReviews({reviews, comedians,}) {
    const {id} = useParams()
    const relevantComedian = comedians.find((comedian) => String(comedian.id) === String(id))
    const relevantReviews = reviews.filter(review => review.comedian_id === relevantComedian.id)

    return (
        <div>
            <h1>{relevantComedian.name}'s Reviews</h1>
            {relevantReviews.map(review => (
            <ul key={review.id}>
                <li>User: {review.user.username}</li>
                <li>Rating: {review.rating}</li>
                <li>{review.review_text}</li>
            </ul>
            ))}
        </div>
    )
}

export default ComedianReviews