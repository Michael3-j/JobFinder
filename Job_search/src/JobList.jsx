import { useEffect,useState } from "react"
export default function JobList ({setWatchList}) {
    const [jobs, setJobs] = useState([])
    

    useEffect(() => {
        fetch("https://remoteok.com/api")
            .then(res => res.json())
            .then(jobs => setJobs(jobs))
    },[])

    const jobList = jobs.slice(1).map(job => {
        return (
            <div>
                <div key={ job.id } className="job">
                <img
                    src={ job.company_logo }
                    alt="logo"
                    className="job-logo"
                />
                <p className="company">{ job.company }</p>
                <p className="location">{ job.location !== "" ? `${job.location}` : null }</p>
                <p className="position">{ job.position }</p>
                <div className="salary">
                    <p>Salary: Kshs { job.salary_max } - Kshs { job.salary_min }</p>
                </div>
                <p className="date">Date: { job.date }</p>
                <div className="tags">{ job.tags 
                    .map(tag => <p key={tag}>{ tag },</p>)    
                }</div>
                <p>Find out more <a href={ job.url}>Here!</a></p>
                <button className="button" onClick={() => setWatchList((prevList)=>[...prevList,job])}>Watchlist➕</button>
            </div>
            </div>
            
        )
    })

    

    return (
        <section className="job-list"> 
            
            { jobList }
        </section>
    )
}