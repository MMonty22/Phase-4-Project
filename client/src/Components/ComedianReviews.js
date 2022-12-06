import React, {useContext} from "react";
import {useParams} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function ComedianReviews() {
    const {state} = useContext(UserContext);
    const {id} = useParams()
    const relevantComedian = state.comedians.find((comedian) => String(comedian.id) === String(id))
    const relevantReviews = state.reviews.filter(review => review.comedian_id === relevantComedian.id)

    return (
        <div>
            <h1>{relevantComedian ? `Reviews for ${relevantComedian.name}`: 'Loading...'}</h1>
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