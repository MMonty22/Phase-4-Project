import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function AddComedianForm(setComedians) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        comedian: "",
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
            comedian: formData.comedian,
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
        .then(data => addComedian(data))
        navigate(`/comedians`)
    }

    function addComedian() {

    }

    return(
        <div>
            <form className="comedianForm" onSubmit={handleSubmit}>
                <label>Comedian</label>
                <br />
                <input id="comedian" type="text" value={formData.comedian} onChange={handleChange}></input>
                <br />
                <label>Your Review</label>
                <br />
                <textarea id="bio" type="text" value={formData.bio} onChange={handleChange}></textarea>
                <br />
                <button id="submitComedianButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddComedianForm