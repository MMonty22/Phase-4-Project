export const initialState = {
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
    case 'createReview': //payload is newReview passed into function from POST request
        const updatedReviews = [...state.reviews, action.payload.newReview]
        //console.log('updatedReviews', updatedReviews)
        const updatedUserReviews = [...state.user.reviews, action.payload.newReview]
        //console.log('updatedUserReviews', updatedUserReviews)
        //console.log('comedians', state.comedians)
      return {
        ...state,
        user: {
            ...state.user,
            reviews: updatedUserReviews
        },
        reviews: updatedReviews
        }
    case 'deleteReview': //payload is reviewID passed into function from DELETE request
      const reviewsMinusDeletedOne = state.reviews.filter((review) => review.id !== action.payload)
      //console.log('reviewsMinuteDeletedOne', reviewsMinusDeletedOne)
      const userReviewsMinusDeletedOne = state.user.reviews.filter((review) => review.id !== action.payload)
      //console.log('userReviewsMinusDeletedOne', userReviewsMinusDeletedOne)
      return {
        ...state,
        user: {
            ...state.user,
            reviews: userReviewsMinusDeletedOne
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

