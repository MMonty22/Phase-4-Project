export const initialState = {
    user: {},
    loggedIn: false,
    errors: [],
    comedians: [],
    users: [],
    reviews: []
}

export function reducer(overallState, action) {
  switch (action.type) {
    case 'setUser':
        return {
        ...overallState,
        user: action.payload
        }
    case 'login':
        return {
            ...overallState,
            user: action.payload,
            loggedIn: true
        }
    case 'signup':
        return {
            ...overallState,
            user: action.payload,
            loggedIn: true
        }
    case 'logout':
        return {
            ...overallState,
            loggedIn: false
        }
    case 'setLoggedIn':
        return {
        ...overallState,
        loggedIn: action.payload
        }
    case 'fetchReviews':
        return {
        ...overallState,
        reviews: action.payload
        }
    case 'updateReview': //payload is editedReview passed into function from PATCH request
        const editedUserReviews = overallState.user.reviews.map((review) => review.id === action.payload.id ? action.payload : review)
        console.log('editedUserReviews', editedUserReviews)
        const editedUsers = overallState.users.map(singleUser => singleUser.id === overallState.user.id ? {...singleUser, reviews: editedUserReviews} : singleUser)
        console.log('editedUsers', editedUsers)
      return {
        ...overallState,
        users: editedUsers,
        reviews: editedUserReviews
        }
    case 'createReview': //payload is newReview passed into function from POST request
        const relevantComedian = overallState.comedians.find((comedian) => String(comedian.id) === String(action.payload.id))
        const updatedReviews = [...overallState.reviews, action.payload.newReview]
        const filteredComedians = overallState.comedians.filter(comedian => comedian.id !== relevantComedian.id)
        //console.log('filteredComedians', filteredComedians)
        relevantComedian.reviews = [...relevantComedian.reviews, action.payload]
      return {
        ...overallState,
        comedians: [...filteredComedians, relevantComedian],
        reviews: updatedReviews
        }
    case 'deleteReview':
      const reviewsMinusDeletedOne = overallState.reviews.filter((review) => review.id !== action.payload)
      return {
        ...overallState,
        reviews: reviewsMinusDeletedOne
        }      
    case 'fetchComedians': //do I want fetchs here, saw them in an example
        return {
        ...overallState,
        comedians: action.payload
        }
    case 'createComedian': //payload is newComedian passed into function from POST request
        const updatedComedians = [...overallState.comedians, action.payload]
        return {
        ...overallState,
        comedians: updatedComedians,
        }
    case 'fetchUsers':
        return {
        ...overallState,
        users: action.payload
        }
    default:
  }
}

