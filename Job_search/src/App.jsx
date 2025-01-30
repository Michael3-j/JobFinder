import JobList from "./components/JobList"
import WatchList from "./components/WatchList";
import ApplicationForm from "./components/ApplicationForm"
import { useState } from "react";



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
     <ApplicationForm submitForm={handleFormSubmit} />
    </>
  )
}

export default App
