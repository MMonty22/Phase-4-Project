import React, {useState} from "react";
import {useSearchParams} from "react-router-dom"

function ReviewForm({comedians}) {
    const [searchParams] = useSearchParams()
    const userID = searchParams.get("id")
    const [formData, setFormData] = useState({
        review: "",
        rating: 0
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
        const [relevantComedian] = comedians.filter((comedian) => String(comedian.id) === String(userID))
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }

    return(
        <div className="reviewForm">
            <form onSubmit={handleSubmit}>
                <label>Please leave a Review</label>
                <input id="description" type="text" name="review" placeholder="Review goes here" value={formData.review} onChange={handleChange}></input>
                <label>Rating out of 10</label>
                <input id="rating" type="number" name="rating" placeholder="9" min={1} max={10} value={formData.rating} onChange={handleChange}></input>
                <button id="submitReviewButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm