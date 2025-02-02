import { useState } from "react"
import JobSearch from "./JobSearch"
import { useOutletContext } from "react-router-dom"


export default function JobList () {
    const { jobs,setWatchList } = useOutletContext();
    
    const [searchCompany, setSearchCompany] = useState("")
    const [searchPosition, setSearchPosition] = useState("")
    const [searchLocation, setSearchLocation] = useState("")


    let jobDisplay;
     if(searchCompany === "" && searchLocation === "" && searchPosition==="" )  {
        jobDisplay = jobs.slice(1)
     }else {
        if (searchCompany !== ""){
            jobDisplay = jobs.slice(1).filter(job => {
                let toBeSearchedJob = job.company.toLowerCase().trim()
                return toBeSearchedJob.includes(searchCompany.toLowerCase().trim()) 
            })
        } else if (searchPosition !== "") {
            jobDisplay = jobs.slice(1).filter(job => {
                let toBeSearchedJob = job.position.toLowerCase().trim()
                return toBeSearchedJob.includes(searchPosition.toLowerCase().trim()) 
            })
        }  else if (searchLocation !== "") {
            jobDisplay = jobs.slice(1).filter(job => {
                let toBeSearchedJob = job.location.toLowerCase().trim()
                return toBeSearchedJob.includes(searchLocation.toLowerCase().trim()) 
            })
        }
     }

    function handleSearchCompany (e) {
        setSearchCompany(e.target.value)
        setSearchLocation('')
        setSearchPosition('')
    }
    function handleSearchPosition (e) {
        setSearchPosition(e.target.value)
        setSearchCompany('')
        setSearchLocation('')
    }
    function handleSearchLocation (e) {
        setSearchLocation(e.target.value)
        setSearchCompany('')
        setSearchPosition('')
    }
   

    return (
        <>
            <JobSearch 
                searchCompany={searchCompany} 
                searchPosition={searchPosition} 
                searchLocation={searchLocation} 
                setSearchCompany={setSearchCompany} 
                setSearchLocation={setSearchLocation} 
                setSearchPosition={setSearchPosition} 
                handleSearchCompany={handleSearchCompany} 
                handleSearchPosition={handleSearchPosition} 
                handleSearchLocation={handleSearchLocation}
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