import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function ComediansContainer() {
    const {state} = useContext(UserContext);
    const navigate = useNavigate()
    const comedian_info = state.comedians.map((singleComedian) =>
        <ul key={singleComedian.id}>
        <li className='comedianLis' onClick={() => navigateToComedianPage(singleComedian.id)}>{singleComedian.name}</li>
    </ul>)

    function navigateToComedianPage(comedianID) {
        navigate(`/comedians/${comedianID}`)
    }

    function navigateToAddComedianForm() {
        navigate('/comedians/new')
    }

    if (state.initialLoad) {
        return <h3 id='loading'>"Loading..."</h3>
    } 
    else if (state.loggedIn)
    return (
        <div>
            <h3 id="addComedian" onClick={() => navigateToAddComedianForm()}>Add A Comedian</h3>
            <ul>{comedian_info}</ul>
        </div>
    )
    else
    return (
        <h3 className='unauthorized'>Not Authorized, Please Login or Create an Account</h3>
    )
}

export default ComediansContainer