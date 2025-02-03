import { useState } from "react";
import JobList from "./components/JobList"
import WatchList from "./components/WatchList";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";




function App() {
  const [watchList, setWatchList] = useState([])

  //The logic for storing submitted applications
  const [applications, setApplications] = useState([]);

  //This will enable us to submit the form
  const handleFormSubmit = (formData) => {
    setApplications([...applications, formData]);
  };



  return ( 
    <>
     <WatchList watchList={watchList} setWatchList={setWatchList}/>
     <JobList setWatchList={setWatchList}/>
     <ApplicationForm submitForm={handleFormSubmit}/>
     <ApplicationList applications={applications}/>
    </>
  )
}

export default App
