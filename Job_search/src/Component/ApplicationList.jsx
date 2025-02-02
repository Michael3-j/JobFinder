function ApplicationList({ applications }) {
    return (
        <div>
            <h2>Submitted Applications</h2>
            {applications.length === 0 ? (
                <p>Applications yet to be Submitted</p>
            ) : (
                <ul>
                    {applications.map((app, index) => (
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