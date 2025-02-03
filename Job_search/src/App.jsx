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
    </>
  );
}

export default App;