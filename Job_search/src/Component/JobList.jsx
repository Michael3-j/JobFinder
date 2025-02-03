import { useState } from "react"
import JobSearch from "./JobSearch"
import { useOutletContext } from "react-router-dom"


export default function JobList () {
    const { jobs,setWatchList } = useOutletContext();
    
    const [search, setSearch] = useState("")


    let jobDisplay;
     if(search === "" )  {
        jobDisplay = jobs.slice(1)
     }else {
            jobDisplay = jobs.slice(1).filter(job => {
                const lowerSearch = search.toLowerCase().trim();
                
                const companySearch = job.company.toLowerCase().includes(lowerSearch)
                const positionSearch = job.position.toLowerCase().includes(lowerSearch)
                const locationSearch = job.location.toLowerCase().includes(lowerSearch)

                return companySearch || positionSearch || locationSearch
                       
            })
     }

    function handleSearch (e) {
        setSearch(e.target.value)
    }
   

    return (
        <>
            <JobSearch 
                search={search} 
                setSearch={setSearch} 
                handleSearch={handleSearch} 
            />
            
            <div className="job-list"> 
                {
                    jobDisplay.map(job => {
                        return (
                                <div key={`${job.company}-${job.id}`} className="job">
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
                                <button className="watchlistButton" onClick={() => setWatchList((prevList)=>[...prevList,job])}>Watchlist➕</button>
                            </div>
                            
                        )
                    })
                }
            </div>
        </>

        
    )
}