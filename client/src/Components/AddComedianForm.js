import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function AddComedianForm({setComedians, comedians}) {
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
        .then(data => addComedian(data))
        navigate(`/comedians`)
    }

    function addComedian(newComedian) {
        const updatedComedians = [...comedians, newComedian]
        setComedians(updatedComedians)
    }

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
            </form>
        </div>
    )
}

export default AddComedianForm