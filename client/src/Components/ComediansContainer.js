import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function ComediansContainer() {
    const {state} = useContext(UserContext);
    const navigate = useNavigate()
    const comedian_info = state.comedians.map((singleComedian) => <ul className='comedians' key={singleComedian.id}>
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