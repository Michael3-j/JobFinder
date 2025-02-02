import React, { useState } from "react";


 function ApplicationForm({ submitForm }) {
    const [ formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: ""
    })

    //This logic will handle input changes
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    // This login will handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData);
    }



    return (
        <div>
            <h2>Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>First Name: 
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    </label>

                    <br />

                    <label>Second Name
                    <input
                      type="text"
                      name="secondName"
                      value={formData}
                      onChange={handleChange} />
                    </label>

                    <label> Email: 
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    </label>

                    <br />

                    <button type="submit">Submit</button>
                </form>
        </div>
    )
 }

 export default ApplicationForm