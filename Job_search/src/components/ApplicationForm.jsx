import React, { useState } from "react";


 function ApplicationForm({ submitForm }) {
    const [ formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: "",
    });

    //This logic will handle input changes
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    // This logit will handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData);
    }



    return (
        <div>
            <h2>Application Form</h2>
                <form onSumit={handleSubmit}>
                    <label>First Name: </label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <br />

                    <label>Second Name</label>
                    <input
                      type="text"
                      name="secondName"
                      value={formData.name}
                      onChange={handleChange}
                    />

                      <br />

                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <br />

                    <button type="submit">Submit</button>
                </form>
        </div>
    )
 }

 export default ApplicationForm