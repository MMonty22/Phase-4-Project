import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Context/UserContext';

function AddComedianForm() {
    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        bio: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newComedianObj = {
            name: formData.name,
            bio: formData.bio
        }
        fetch(`/comedians`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComedianObj)
        })
        .then(res => res.json())
        .then(data => {
            if (!data.errors) {
                addComedian(data)
                navigate(`/comedians`)
            }
            else {
                setFormData({name: "", bio: ""})
                const errors = data.errors.map(e => <li>{e}</li>)
                dispatch({type: "setComedianErrors", payload: errors})
            }
        })
    }

    function addComedian(newComedian) {
        dispatch({type: "createComedian", payload: newComedian})
    }

    if (state.errors.length >0)
    return(
        <div>
            <form className="comedianForm" onSubmit={handleSubmit}>
                <label>Comedian</label>
                <br />
                <input id="name" type="text" value={formData.name} onChange={handleChange}></input>
                <br />
                <label>Bio</label>
                <br />
                <textarea id="bio" type="text" value={formData.bio} onChange={handleChange}></textarea>
                <br />
                <button id="submitComedianButton" type="submit">Submit</button>
                {state.errors}
            </form>
        </div>
    )
    else return(
        <div>
            <form className="comedianForm" onSubmit={handleSubmit}>
                <label>Comedian</label>
                <br />
                <input id="name" type="text" value={formData.name} onChange={handleChange}></input>
                <br />
                <label>Bio</label>
                <br />
                <textarea id="bio" type="text" value={formData.bio} onChange={handleChange}></textarea>
                <br />
                <button id="submitComedianButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddComedianForm