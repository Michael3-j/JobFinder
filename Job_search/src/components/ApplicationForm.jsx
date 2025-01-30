import React, { useState } from "react";


 function ApplicationForm({ submitForm }) {
    const [ formData, setFormData] = useState({
        name: "",
        email: "",
    })

    //This logic will handle input changes
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value; 
        }))
    }
    // This logit will handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData);
    }



    return (
        <div>
            <h2>Application Form<h2>



        </div>

    )
    
 }

 export default ApplicationForm