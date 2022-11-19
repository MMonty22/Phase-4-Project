import React from "react";
import {useParams} from "react-router-dom"

function ComedianReviews({comedians, users}) {
    const {id} = useParams()
    const relevantComedian = comedians.find((comedian) => String(comedian.id) === String(id))
    //console.log('RelevantComedian', relevantComedian)
    //console.log('users', users)
    const relevantUser = users.find((user) => String(user.id) === String(relevantComedian.users.map((user) => user.id)))
    //console.log('RelevantUser', relevantUser)

    return (
        <div>
            <h1>{relevantComedian.name}'s Reviews</h1>
            {relevantComedian?.reviews?.map(review => (<ul key={review.id}>
                <li>User: {relevantUser.username}</li>
                <li>Rating: {review.rating}</li>
                <li>{review.review_text}</li>
            </ul>))}
        </div>
    )
}

export default ComedianReviews