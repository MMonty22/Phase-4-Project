import React from 'react'

function Comedian({singleComedian}) {

    return (
        <div className='comedian'>
            <h3>{singleComedian.name}</h3>
            <p>{singleComedian.average_rating}</p>
            <p>{singleComedian.review_count}</p>
            <p>{singleComedian.bio}</p>
        </div>
    )
}

export default Comedian