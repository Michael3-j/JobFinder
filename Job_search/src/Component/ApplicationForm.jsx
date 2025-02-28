import { useState } from "react";
import { useOutletContext } from "react-router-dom";


 function ApplicationForm({jobApplied, setIsShown}) {
  const {submitForm, setFormData,formData} = useOutletContext();
  const [applied, setApplied] = useState([])
  

    //This logic will handle input changes
    const handleChange = (e) => {
        const { name, value} = e.target;
        setApplied((prevData) => ({
            ...prevData,
            [name]: value
    }))
    }
    // This login will handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormData = {
          company: jobApplied.company,
          position: jobApplied.position,
          ...applied
        }

        setFormData((prevData) => [...prevData, newFormData])
        submitForm(newFormData);
        setIsShown(shown => !shown)
        
    }


    return (
        <div className="applicationformcontainer" >
            <h2>Application Form</h2>             
                <form className="applicationform" onSubmit={handleSubmit}>
                    <div className="forminput">
                    <label>Company Name: 
                      <input 
                      type="text"
                      readOnly
                      name="company"
                      value={jobApplied.company}
                      />
                    </label>
                    </div>

                    <div className="forminput">
                    <label>Position : 
                      <input 
                      type="text"
                      name="position"
                      readOnly
                      value={jobApplied.position}
                      />
                    </label>
                    </div>

                   <div className="forminput">
                   <label>First Name: 
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    </label>
                   </div>


                    <div className="forminput" >
                    <label>Second Name:
                    <input
                      type="text"
                      name="secondName"
                      required
                      value={formData.secondName}
                      onChange={handleChange} />
                    </label>
                    </div>

                    <div className="forminput">
                    <label> Email: 
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    </label>
                    </div>

                    <br />

                    <button className="submitbutton" type="submit">Submit</button>
                </form>
        </div>
    )
 }

 export default ApplicationForm