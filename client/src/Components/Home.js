import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function Home() {
    const navigate = useNavigate()
    const {user, loggedIn, logout, overallState, dispatch} = useContext(UserContext)
    const [showReviews, setshowReviews] = useState(false)
    const [showComedians, setshowComedians] = useState(false)
    //console.log('user', user)

    const userComedians = user?.comedians?.map((comedian) => <ul key={comedian.id}>
        <li>Comedian: {comedian.name}</li>
        <li>Bio: {comedian.bio}</li>
        <li>Average Rating: {comedian.average_rating}</li>
    </ul>)

    const userReviews = user?.reviews?.map((review) => {
        const relevantComedian = user.comedians.find(comedian => String(comedian.id) === String(review.comedian_id))
        return (<ul key={review.id}>
            <li>Comedian: {relevantComedian.name}</li>
            <li>Review: {review.review_text}</li>
            <li>Rating: {review.rating}</li>
            <button onClick={() => navigateToReviewEditForm(review.id)}>Edit Review</button>
            <button onClick={() => handleDelete(review.id)}>Delete Review</button>
        </ul>
    )})

    function handleDelete(reviewID) {
        fetch(`/reviews/${reviewID}`, {
            method: "DELETE",
        })
        .then(res => removeReview(reviewID))
    }

    function removeReview(reviewID) {
        dispatch({type: "deleteReview", payload: reviewID})
        // const updatedReviews = reviews.filter((review) => review.id !== reviewID)
        // console.log('updatedReviews', updatedReviews)
        // setReviews(updatedReviews)
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
            headers: {"Content-Type": "application/json"},
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

    if (loggedIn && showReviews)
        return (
            <div>
                <h2>Welcome, {user.username}</h2>
                <button className='logoutButton' onClick={handleUserLogout}>Logout</button>
                <br/>
                <button onClick={handleShowReviews}>{showReviews ? "Hide My Reviews" : "Show My Reviews"}</button>
                <br/>
                <button onClick={handleShowComedians}>{showComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
                {userReviews}
            </div>
    )
    else if (loggedIn && showComedians)
        return(
            <div>
                <h2>Welcome, {user.username}</h2>
                <button className='logoutButton' onClick={handleUserLogout}>Logout</button>
                <br/>
                <button onClick={handleShowReviews}>Show My Reviews</button>
                <br/>
                <button onClick={handleShowComedians}>{showComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
                {userComedians}
            </div>
        )
    else if (loggedIn)
        return(
            <div>
                <h2>Welcome, {user.username}</h2>
                <button className='logoutButton' onClick={handleUserLogout}>Logout</button>
                <br/>
                <button onClick={handleShowReviews}>Show My Reviews</button>
                <br/>
                <button onClick={handleShowComedians}>{showComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
            </div>
        )
    else
        return (
            <div>
                <h2>Please Create and Account or Login</h2>
                <button onClick={navigateToSignUpPage}>Create Account</button>
                <button onClick={navigateToLoginPage}>Login</button>
            </div>
        ) 
}

export default Home