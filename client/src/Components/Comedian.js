import React, {useState, useContext} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function Comedian() {
    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate()
    const {id} = useParams()
    const [showReviewForm, setShowReviewForm] = useState(false)
    const relevantComedian = state?.comedians?.find((comedian) => String(comedian.id) === String(id))

    const [formData, setFormData] = useState({
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
            comedian_id: id,
            comedian: relevantComedian.name,
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
        .then(data => {
            if (!data.errors) {
                addReview(data)
                navigate(`/comedians/${id}/reviews`)
            }
            else {
                setFormData({review_text: "", rating: 1})
                const errors = data.errors.map(e => <li>{e}</li>)
                dispatch({type: "setReviewErrors", payload: errors})
            }})
    }

    function addReview(newReview) {
        dispatch({type: "createReview", payload: {newReview, id}})
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }
    if (showReviewForm && state.errors.length > 0)
        return (
            <div>
                <h3>{relevantComedian.name}</h3>
                <p>{relevantComedian.bio}</p>
                <button onClick={() => seeReviewForm(relevantComedian.id)}>{showReviewForm ? "Hide Review Form" : "Leave A Review"}</button>
                <button onClick={() => navigateToComedianReviews(relevantComedian.id)}>See Reviews</button>
                <h3>Please Leave a Review</h3>
                <form className="reviewForm" onSubmit={handleSubmit}>
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
                {state.errors}
        </div>
        )
    else if (showReviewForm)
        return (
            <div>
                <h3>{relevantComedian.name}</h3>
                <p>{relevantComedian.bio}</p>
                <button onClick={() => seeReviewForm(relevantComedian.id)}>{showReviewForm ? "Hide Review Form" : "Leave A Review"}</button>
                <button onClick={() => navigateToComedianReviews(relevantComedian.id)}>See Reviews</button>
                <h3>Please Leave a Review</h3>
                <form className="reviewForm" onSubmit={handleSubmit}>
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
                <h3>{relevantComedian ? `${relevantComedian.name}` : 'Loading...'}</h3>
                <p>{relevantComedian ? `${relevantComedian.bio}`: ''}</p>
                <button onClick={() => seeReviewForm(relevantComedian.id)}>Leave a Review</button>
                <button onClick={() => navigateToComedianReviews(relevantComedian.id)}>See Reviews</button>
            </div>
        )
}

export default Comedian