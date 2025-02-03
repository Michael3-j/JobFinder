import { useOutletContext } from "react-router-dom";
function ApplicationList() {
    const {formData} = useOutletContext()
    console.log(formData)
    return (
        <div>
            <h2>Submitted Applications</h2>
            {formData.length === 0 ? (
                <p>Applications yet to be Submitted</p>
            ) : (
                <ul className="appliedjobs">
                    {formData.map((app, index) => (
                        <li key={`${index}-${app.company}`}>
                            <h2>{app.company}</h2>
                            <h4>{ app.position }</h4>
                            <p>FirstName : {app.firstName}</p>
                            <p>SecondName : {app.secondName}</p>
                            <p>Email : {app.email}</p>
                            <p>Status: <strong>Applied</strong></p>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default ApplicationList;