import React, {useState} from 'react'
import {useNavigate, useParams} from "react-router-dom"

function Comedian({comedians, setReviews, reviews}) {
    const navigate = useNavigate()
    const {id} = useParams()
    //console.log('id', id) is the id of the comedian
    const [showReviewForm, setShowReviewForm] = useState(false)
    const relevantComedian = comedians.find((comedian) => String(comedian.id) === String(id))
    //console.log('relevantComedian', relevantComedian)
    const [formData, setFormData] = useState({
        comedian: `${relevantComedian.name}`,
        review_text: "",
        rating: 1
    })

    function navigateToComedianReviews(comedianID) {
        navigate(`/comedians/${comedianID}/reviews`)
    }
    
    function seeReviewForm() {
        setShowReviewForm(!showReviewForm)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newReviewObj = {
            comedian: formData.comedian,
            review_text: formData.review_text,
            rating: formData.rating,
        }
        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReviewObj)
        })
        .then(res => res.json())
        .then(data => addReview(data))
        navigate(`/comedians/${id}/reviews`)
    }

    function addReview(newReview) {

        //setReviews([...reviews, newReview])
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }

    if (showReviewForm)
        return (
            <div>
                <h3>{relevantComedian.name}</h3>
                <p>{relevantComedian.bio}</p>
                <p>Average Rating: {relevantComedian.average_rating}</p>
                <button onClick={() => seeReviewForm(relevantComedian.id)}>{showReviewForm ? "Hide Review Form" : "Leave A Review"}</button>
                <button onClick={() => navigateToComedianReviews(relevantComedian.id)}>See Reviews</button>
                <h3>Please Leave a Review</h3>
                <form className="reviewForm" onSubmit={handleSubmit}>
                    <label>Comedian</label>
                    <br />
                    <input id="comedian" type="text" value={formData.comedian} readOnly></input>
                    <br />
                    <label>Your Review</label>
                    <br />
                    <textarea id="review_text" type="text" placeholder="Ex: Jerry Seinfeld is unbelievably hilarious..." value={formData.review_text} onChange={handleChange}></textarea>
                    <br />
                    <label>Rating out of 10</label>
                    <br />
                    <input id="rating" type="number" name="rating" placeholder="9" min={1} max={10} value={formData.rating} onChange={handleChange}></input>
                    <br />
                    <button id="submitReviewButton" type="submit">Submit</button>
                </form>
        </div>
        )
    else
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