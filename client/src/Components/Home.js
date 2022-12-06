import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function Home() {
    const navigate = useNavigate()
    const { logout, state, dispatch } = useContext(UserContext)
    const [showReviews, setshowReviews] = useState(false)
    const [showComedians, setshowComedians] = useState(false)

    const userComedians = state.user?.comedians?.map((comedian) => <ul key={comedian.id}>
        <li>Comedian: {comedian.name}</li>
        <li>Bio: {comedian.bio}</li>
    </ul>)

    const userReviews = state.user?.reviews?.map((review) => {
        const relevantComedian = state.user.comedians.find(comedian => String(comedian.id) === String(review.comedian_id))
        return (<ul key={review.id}>
            <li>Comedian: {relevantComedian.name}</li>
            <li>Review: {review.review_text}</li>
            <li>Rating: {review.rating}</li>
            <button onClick={() => navigateToReviewEditForm(review.id)}>Edit Review</button>
            <button onClick={() => handleDelete(review.id, relevantComedian.id)}>Delete Review</button>
        </ul>
        )
    })

    function handleDelete(reviewID, relevantComedianID) {
        fetch(`/reviews/${reviewID}`, {
            method: "DELETE",
        })
            .then(res => removeReview(reviewID, relevantComedianID))
    }

    function removeReview(reviewID, relevantComedianID) {
        dispatch({ type: "deleteReview", payload: {reviewID, relevantComedianID}})
    }

    function navigateToReviewEditForm(reviewID) {
        navigate(`/reviews/${reviewID}/edit`)
    }

    function navigateToLoginPage() {
        navigate('/login')
    }

    function navigateToSignUpPage() {
        navigate('/signup')
    }

    function handleUserLogout() {
        fetch('/logout', {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        })
            .then(() => {
                logout()
                navigate('/')
            })
    }

    function handleShowReviews() {
        setshowReviews(!showReviews)
    }

    function handleShowComedians() {
        setshowComedians(!showComedians)
    }

    if (state.initialLoad) {
        return <h3 id='loading'>"Loading..."</h3>
    } 
    if (state.loggedIn && showReviews)
        return (
            <div className='home'>
                <h2>Welcome, {state.user.username}</h2>
                <button className='logoutButton' onClick={handleUserLogout}>Logout</button>
                <br />
                <button onClick={handleShowReviews}>{showReviews ? "Hide My Reviews" : "Show My Reviews"}</button>
                <br />
                <button onClick={handleShowComedians}>{showComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
                {userReviews}
            </div>
        )
    else if (state.loggedIn && showComedians)
        return (
            <div className='home'>
                <h2>Welcome, {state.user.username}</h2>
                <button className='logoutButton' onClick={handleUserLogout}>Logout</button>
                <br />
                <button onClick={handleShowReviews}>Show My Reviews</button>
                <br />
                <button onClick={handleShowComedians}>{showComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
                {userComedians}
            </div>
        )
    else if (state.loggedIn)
        return (
            <div className='home'>
                <h2>Welcome, {state.user.username}</h2>
                <button className='logoutButton' onClick={handleUserLogout}>Logout</button>
                <br />
                <button onClick={handleShowReviews}>Show My Reviews</button>
                <br />
                <button onClick={handleShowComedians}>{showComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
            </div>
        )
    else
        return (
            <div className='home'>
                <h2>Please Create an Account or Login</h2>
                <button className='homeButtons' onClick={navigateToSignUpPage}>Create Account</button>
                <button className='homeButtons' onClick={navigateToLoginPage}>Login</button>
            </div>
        )
}

export default Home