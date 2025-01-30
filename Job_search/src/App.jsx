import JobList from "./components/JobList"
import WatchList from "./components/WatchList";
import ApplicationForm from "./components/ApplicationForm"
import { useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([])
  return ( 
    <>
     <WatchList watchList={watchList} setWatchList={setWatchList}/>
     <JobList setWatchList={setWatchList}/>
    </>
  )
}

export default App
