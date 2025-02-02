import React from "react";
import ApplicationForm from "./ApplicationForm";

import { useOutletContext } from "react-router-dom";

function WatchList(){
    const {watchList, setWatchList} = useOutletContext()

    const removeFromWatchlist = (jobId) => {
        setWatchList((prevList) => prevList.filter((job) => job.id !== jobId));
      };
   return(
    <div className="theWatchList">
        <h1>YOUR WATCHLIST</h1>
        {watchList.length === 0 ? (<p>Watchlist is empty</p>) :
        (
            <div>
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
                        <button onClick={() => removeFromWatchlist(job.id)}>✖</button>
                        <button onClick={()=> openApplicationForm(job)}>Apply💼</button>
                    </div>
                ) )}
            </div>
        )

        }
        
        <button></button>
    </div>
   )
}

export default WatchList;