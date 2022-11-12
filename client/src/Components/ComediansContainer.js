import React from 'react'
import Comedian from './Comedian'

function ComediansContainer({comedians}) {
    const comedian_info = comedians.map((singleComedian) => <Comedian key={singleComedian.id} singleComedian={singleComedian}/>)

    return (
        <div>
            <ul>{comedian_info}</ul>
        </div>
    )
}

export default ComediansContainer