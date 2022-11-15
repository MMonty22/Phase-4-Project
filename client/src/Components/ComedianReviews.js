import React from "react";
import {useSearchParams} from "react-router-dom"

function ComedianReviews({comedians}) {
    const [searchParams] = useSearchParams()
    const comedianID = searchParams.get("id")
    const relevantComedian = comedians.filter((comedian) => String(comedian.id) === String(comedianID))
    //console.log('RelevantComedian', relevantComedian)

    return (
        <div>
            <h1>{relevantComedian[0].name}'s Reviews</h1>
            {relevantComedian[0]?.reviews?.map(review => (<ul key={review.id}>
                <li>User: {}</li>
                <li>Rating: {review.rating}</li>
                <li>{review.review_text}</li>
            </ul>))}
        </div>
    )
}

export default ComedianReviews