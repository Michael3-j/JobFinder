<<<<<<< HEAD
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
=======
import NavBar from "./Component/NavBar";
import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header";

function App() {
  const [jobs, setJobs] = useState([])
  const [watchList, setWatchList] = useState([]);
  const [ formData, setFormData] = useState([])

  useEffect(() => {
    fetch("https://remoteok.com/api")
        .then(res => res.json())
        .then(jobs => setJobs(jobs))
  },[])

  function submitForm () {
    
  }

  return ( 
    <>
      <Header />
      <NavBar />
      <Outlet 
        context={{
          watchList,
          setWatchList,
          jobs,
          setFormData,
          submitForm,
          formData
        }}
      />
>>>>>>> 34d6f53d823d808f055655f397e59f49206a200a
    </>
  );
}

export default App;