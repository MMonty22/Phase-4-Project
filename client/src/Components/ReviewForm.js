import React, {useState, useContext} from "react";
import { UserContext } from '../Context/UserContext';
import {useParams, useNavigate} from "react-router-dom"

function ReviewForm({reviews, setReviews, comedians}) {
    const navigate = useNavigate()
    const {id} = useParams()
    const {user} = useContext(UserContext)
    
    const [formData, setFormData] = useState({
        //comedian: "",
        review_text: "",
        rating: 1
    })

    function handleSubmit(event) {
        event.preventDefault()
        const newReviewObj = {
            //comedian: formData.comedian,
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
        navigate('/')
    }

    function addReview(newReview) {
        setReviews([...reviews, newReview])
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
                {/* <label>Comedian</label>
                <br />
                <input id="comedian" type="text" placeholder="Ex: Kevin Hart" value={formData.comedian} onChange={handleChange}></input>
                <br /> */}
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
}

export default ReviewForm