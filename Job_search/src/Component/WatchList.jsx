import React ,{useState} from "react";
import ApplicationForm from "./ApplicationForm";

import { useOutletContext } from "react-router-dom";

function WatchList(){
    const {watchList, setWatchList} = useOutletContext()
    const [isShown, setIsShown] = useState(true)
    //const [applications, setApplications] = useState([])
    const [jobApplied, setJobApplied] =useState()

    const removeFromWatchlist = (jobId) => {
        setWatchList((prevList) => prevList.filter((job) => job.id !== jobId));
      };

    function onApply (job) {
        setIsShown(shown => !shown)
        setJobApplied(job)

        //setApplications(prevApplications => [...prevApplications, job])
0
    }
   return(
    <>
        {isShown? (
        <div>
            <h1>YOUR WATCHLIST</h1>
            {watchList.length === 0 ? (<p>Watchlist is empty</p>) :
            (
                <div className="thewatchlist" >
                    {watchList.map((job) =>(
                        <div key={job.id} className="job">
                            <p>{job.position}</p>
                            <br/>
                            <p>{job.company}</p>
                            <br/>
                            <p>{job.location}</p>
                            <br/>
                            <p>Maximum Salary:{job.salary_max}</p>
                            <br/>
                            <p>Minimum Salary: {job.salary_min}</p>
                            <button className ="removeButton" onClick={() => removeFromWatchlist(job.id)}>✖</button>
                            <button className="applyButton"  onClick={()=> onApply(job)}>Apply💼</button>
                        </div>
                    ) )}
                </div>
            )

            }
        </div>
        ):
            <ApplicationForm jobApplied={jobApplied} setIsShown={setIsShown} />
        }
    </>
   )
}

export default WatchList;