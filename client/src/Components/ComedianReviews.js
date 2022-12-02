import React, {useContext} from "react";
import {useParams} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function ComedianReviews() {
    const {overallState} = useContext(UserContext);
    const {id} = useParams()
    const relevantComedian = overallState.comedians.find((comedian) => String(comedian.id) === String(id))
    const relevantReviews = overallState.reviews.filter(review => review.comedian_id === relevantComedian.id)

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