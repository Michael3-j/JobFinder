import JobList from "./Component/JobList";
import WatchList from "./Component/WatchList";
import NavBar from "./Component/NavBar";
import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [jobs, setJobs] = useState([])
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("https://remoteok.com/api")
        .then(res => res.json())
        .then(jobs => setJobs(jobs))
  },[])

  return ( 
    <>
      <NavBar />
      <Outlet 
        context={{
          watchList,
          setWatchList,
          jobs
        }}
      />
    </>
  );
}

export default App;