import React, {useState} from 'react'
import {useNavigate, useParams} from "react-router-dom"

function Comedian({comedians}) {
    const navigate = useNavigate()
    const {id} = useParams()
    //console.log('id', id) is the id of the comedian
    const [showReviewForm, setShowReviewForm] = useState(false)
    const relevantComedian = comedians.find((comedian) => String(comedian.id) === String(id))
    //console.log('relevantComedian', relevantComedian)

    function navigateToComedianReviews(comedianID) {
        navigate(`/comedians/${comedianID}/reviews`)
    }
    
    function seeReviewForm() {
        setShowReviewForm(!showReviewForm)
    }

    return (
        <div className='comedian'>
            <h3>{relevantComedian.name}</h3>
            <p>{relevantComedian.bio}</p>
            <p>Average Rating: {relevantComedian.average_rating}</p>
            <button onClick={() => seeReviewForm(relevantComedian.id)}>Leave a Review</button>
            <button onClick={() => navigateToComedianReviews(relevantComedian.id)}>See Reviews</button>
        </div>
    )
}

export default Comedian