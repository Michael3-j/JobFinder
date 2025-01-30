import React, { useState } from "react";


 function ApplicationForm({ submitForm }) {
    const [ formData, setFormData] = useState({
        name: "",
        email: "",
    })

    //This logic will Handle input changes
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value; 
        }))
    }


    return (
        <div>
            <h2>Application Form<h2>



        </div>

    )
    
 }

 export default ApplicationForm