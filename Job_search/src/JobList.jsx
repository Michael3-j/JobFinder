import { useEffect,useState } from "react"
export default function JobList () {
    const [jobs, setJobs] = useState([])
    const [watchList, setWatchList] = useState([])

    useEffect(() => {
        fetch("https://remoteok.com/api")
            .then(res => res.json())
            .then(jobs => setJobs(jobs))
    },[])

    const jobList = jobs.slice(1).map(job => {
        return (
            <div key={ job.id } className="job">
                <img
                    className="job-logo"
                    src={ job.company_logo }
                    alt="logo"
                    width='60px'
                />
                <p>Company: { job.company }</p>
                <p>Date: { job.date }</p>
                <p>Position: { job.position }</p>
                <p>{ job.location !== "" ? `Location: ${job.location}` : null }</p>
                <div className="salary">
                    <p>Salary: Kshs { job.salary_max } - Kshs { job.salary_min }</p>
                </div>
                <p>Tags</p>
                <div className="tags">{ job.tags 
                    .map(tag => <p key={tag}>{ tag } ,</p>)    
                }</div>
                <p>Find out more <a href={ job.url}>Here!</a></p>
                <div className="buttons">
                    <button onClick={() => onWatch(job)}>Watch</button>
                </div>

            </div>
        )
    })

    function onWatch (job) {
        setWatchList(watched => [...watched, job ])
        console.log(watchList)
    }

    

    return (
        <section className="job-list"> 
            
            { jobList }
        </section>
    )
}