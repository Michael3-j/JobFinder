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
                <ul>
                    {formData.map((app, index) => (
                        <li key={index}>
                            <strong>{app.firstName} {app.secondName}</strong> -{app.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default ApplicationList;