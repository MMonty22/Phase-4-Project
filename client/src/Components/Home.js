import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function Home(reviews, setReviews) {
    const navigate = useNavigate()
    const {user, loggedIn, logout} = useContext(UserContext)
    const [myReviews, setMyReviews] = useState(false)
    const [myComedians, setMyComedians] = useState(false)
    //console.log('user', user)
    //console.log('loggedIn', loggedIn)

    const userComedians = user?.comedians?.map((comedian) => <ul key={comedian.id}>
        <li>Comedian: {comedian.name}</li>
        <li>Bio: {comedian.bio}</li>
        <li>Average Rating: {comedian.average_rating}</li>
    </ul>)

    //const relevantComedian = user?.comedians?.map((comedian) => comedian.id === user.reviews.)

    const userReviews = user?.reviews?.map((review) => <ul key={review.id}>
        <li>Comedian: {/*this is a problem user?.comedians?.map((comedian) => comedian.name)*/}</li>
        <li>Review: {review.review_text}</li>
        <li>Rating: {review.rating}</li>
        <button onClick={() => navigateToReviewEditForm(review.id)}>Edit Review</button>
        <button onClick={() => handleDelete(review.id)}>Delete Review</button>
    </ul>)

    function handleDelete(reviewID) {
        fetch(`/reviews/${reviewID}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(deletedReview => removeReview(deletedReview))
    }//Unhandled Rejection (SyntaxError): Unexpected end of JSON input

    function removeReview(reviewToRemove) {
        const updatedReviews = reviews?.filter((review) => review.id !== reviewToRemove.id)
        console.log('updatedReviews', updatedReviews)
        setReviews(updatedReviews)
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
            headers: {"Content-Type": "application/json",},
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    function handleMyReviews() {
        setMyReviews(!myReviews)
    }

    function handleMyComedians() {
        setMyComedians(!myComedians)
    }

    if (loggedIn && myReviews)
        return (
            <div>
                <h2>Welcome, {user.username}</h2>
                <button onClick={handleUserLogout}>Logout</button>
                <br/>
                <button onClick={handleMyReviews}>{myReviews ? "Hide My Reviews" : "Show My Reviews"}</button>
                <br/>
                <button onClick={handleMyComedians}>{myComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
                {userReviews}
            </div>
    )
    else if (loggedIn && myComedians)
        return(
            <div>
                <h2>Welcome, {user.username}</h2>
                <button onClick={handleUserLogout}>Logout</button>
                <br/>
                <button onClick={handleMyReviews}>Show My Reviews</button>
                <br/>
                <button onClick={handleMyComedians}>{myComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
                {userComedians}
            </div>
        )
    else if (loggedIn)
        return(
            <div>
                <h2>Welcome, {user.username}</h2>
                <button onClick={handleUserLogout}>Logout</button>
                <br/>
                <button onClick={handleMyReviews}>Show My Reviews</button>
                <br/>
                <button onClick={handleMyComedians}>{myComedians ? "Hide Comedians I Reviewed" : "Show Comedians I Reviewed"}</button>
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