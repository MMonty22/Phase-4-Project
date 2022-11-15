import React, {useState} from "react";
import {useSearchParams} from "react-router-dom"

function ReviewForm({comedians}) {
    const [searchParams] = useSearchParams()
    const userID = searchParams.get("id")
    const [formData, setFormData] = useState({
        review: "",
        rating: 1
    })

    function handleSubmit(event) {
        event.preventDefault()
        const newReviewObj = {
            review: formData.review,
            rating: formData.rating,
        }
        fetch(`/comedians/reviews/${userID}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReviewObj)
        })
        .then(res => res.json())
        .then(data => addReview(data, userID))
    }

    function addReview() {
        
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }

    return(
        <div className="reviewForm">
            <h1>Please Leave a Review</h1>
            <form onSubmit={handleSubmit}>
                <label>Comedian</label>
                <input id="comedian" type="text"></input>
                <label>Your Review</label>
                <textarea id="review" type="text" placeholder="Review goes here" value={formData.review} onChange={handleChange}></textarea>
                <label>Rating out of 10</label>
                <input id="rating" type="number" name="rating" placeholder="9" min={1} max={10} value={formData.rating} onChange={handleChange}></input>
                <button id="submitReviewButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm