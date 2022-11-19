import React, {useState} from "react";
import {useParams} from "react-router-dom"

function ReviewEditForm({reviews}) {
    const {id} = useParams()
    //console.log('id', id)
    //console.log('reviews', reviews)
    const relevantReview = reviews.find((review) => String(review.id) === String(id))
    //console.log('relevantReview', relevantReview)
    const [editFormData, setEditFormData] = useState({
        review: relevantReview.review_text,
        rating: relevantReview.rating
    })

    function handleSubmit(event) {
        event.preventDefault()
        const editedReviewObj = {
            review: editFormData.review,
            rating: editFormData.rating,
        }
        fetch(`/reviews/${id}/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedReviewObj)
        })
        .then(res => res.json())
        .then(data => editReview(data))
    }

    function editReview() {
        
    }

    function handleChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.id]: event.target.value,
        })
    }

    return(
        <div className="reviewForm">
            <h1>Please Leave a Review</h1>
            <form onSubmit={handleSubmit}>
                <label>Your Review</label>
                <br/>
                <textarea id="review" type="text" value={editFormData.review} onChange={handleChange}></textarea>
                <br/>
                <label>Rating out of 10</label>
                <br/>
                <input id="rating" type="number" name="rating" min={1} max={10} value={editFormData.rating} onChange={handleChange}></input>
                <br/>
                <button id="submitReviewButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReviewEditForm