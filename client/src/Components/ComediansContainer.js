import React from 'react'
import {useNavigate} from "react-router-dom"

function ComediansContainer({comedians}) {
    const navigate = useNavigate()
    const comedian_info = comedians.map((singleComedian) => <ul key={singleComedian.id}>
        <li onClick={() => navigateToComedianPage(singleComedian.id)}>{singleComedian.name}</li>
    </ul>)

    function navigateToComedianPage(comedianID) {
        navigate(`/comedians/${comedianID}`)
    }

    function navigateToAddComedianForm() {
        navigate('/comedians/new')
    }

    return (
        <div>
            <h3 id="addComedian" onClick={() => navigateToAddComedianForm()}>Add A Comedian</h3>
            <ul>{comedian_info}</ul>
        </div>
    )
}

export default ComediansContainer