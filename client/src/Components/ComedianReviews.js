import React from "react";
import {useSearchParams} from "react-router-dom"

function ComedianReviews({comedians}) {
    const comedian = comedians.map((singleComedian) => console.log(singleComedian))
    const [searchParams] = useSearchParams()
    const comedianID = searchParams.get("comedian_id")
    const relevantComedian = comedians.filter((comedian) => String(comedian.id) === String(comedianID))

    return (
        <div>
            <h1>{relevantComedian.name}'s Reviews</h1>
            <p>{relevantComedian.reviews[0].review_text}</p>
        </div>
    )
}

export default ComedianReviews