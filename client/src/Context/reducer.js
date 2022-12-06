export const initialState = {
    initialLoad: true,
    user: {},
    loggedIn: false,
    errors: [],
    comedians: [],
    users: [],
    reviews: []
}

export function reducer(state, action) {
  switch (action.type) {
    case 'setUser':
        return {
        ...state,
        user: action.payload
        }
    case 'setLoad':
        return {
        ...state,
        initialLoad: false    
        }
    case 'login':
        return {
            ...state,
            user: action.payload,
            loggedIn: true
        }
    case 'signup':
        return {
            ...state,
            user: action.payload,
            loggedIn: true
        }
    case 'logout':
        return {
            ...state,
            user: {},
            loggedIn: false
        }
    case 'setLoggedIn':
        return {
        ...state,
        loggedIn: action.payload
        }
    case 'fetchReviews':
        return {
        ...state,
        reviews: action.payload
        }
    case 'updateReview': //payload is editedReview passed into function from PATCH request
        const editedUserReviews = state.user.reviews.map((review) => review.id === action.payload.id ? action.payload : review)
        //console.log('editedUserReviews', editedUserReviews)
        const editedReviews = state.reviews.map((review) => review.id === action.payload.id ? action.payload : review)
        const editedUsers = state.users.map(singleUser => singleUser.id === state.user.id ? {...singleUser, reviews: editedUserReviews} : singleUser)
        //console.log('editedUsers', editedUsers)
      return {
        ...state,
        user: {
            ...state.user,
            reviews: editedUserReviews
        },
        users: editedUsers,
        reviews: editedReviews
        }
    case 'createReview': //payload is newReview and id passed into function from POST request
        const updatedReviews = [...state.reviews, action.payload.newReview]
        //console.log('updatedReviews', updatedReviews)
        const updatedUserReviews = [...state.user.reviews, action.payload.newReview]
        //console.log('updatedUserReviews', updatedUserReviews)
        const newUserComedian = state.comedians.find(comedian => String(comedian.id) === String(action.payload.id))
        //console.log('newUserComedian', newUserComedian)
        const newUserComedians = [...state.user.comedians, newUserComedian]
        //console.log('newUserComedians', newUserComedians)
      return {
        ...state,
        user: {
            ...state.user,
            reviews: updatedUserReviews,
            comedians: newUserComedians
        },
        reviews: updatedReviews
        }
    case 'deleteReview': //payload is reviewID and relevantComedianID passed into function from DELETE request
      const reviewsMinusDeletedOne = state.reviews.filter((review) => review.id !== action.payload.reviewID)
      //console.log('reviewsMinuteDeletedOne', reviewsMinusDeletedOne)
      const userReviewsMinusDeletedOne = state.user.reviews.filter((review) => review.id !== action.payload.reviewID)
      //console.log('userReviewsMinusDeletedOne', userReviewsMinusDeletedOne)
      const userComediansMinusDeletedOne = state.user.comedians.filter((comedian) => comedian.id !== action.payload.relevantComedianID)
      //console.log('userComediansMinusDeletedOne', userComediansMinusDeletedOne)
      return {
        ...state,
        user: {
            ...state.user,
            reviews: userReviewsMinusDeletedOne,
            comedians: userComediansMinusDeletedOne
        },
        reviews: reviewsMinusDeletedOne
        }
    case 'fetchComedians':
        return {
        ...state,
        comedians: action.payload
        }
    case 'createComedian': //payload is newComedian passed into function from POST request
        const updatedComedians = [...state.comedians, action.payload]
        return {
        ...state,
        user: {
            ...state.user,
        },
        comedians: updatedComedians,
        }
    case 'fetchUsers':
        return {
        ...state,
        users: action.payload
        }
    default:
  }
}

