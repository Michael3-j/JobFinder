import JobList from "./JobList";
<<<<<<< HEAD
import JobSearch from "./Component/JobSearch";
=======
import WatchList from "./components/WatchList";
import { useState } from "react";

>>>>>>> origin/CODE-BASE
function App() {
  const [watchList, setWatchList] = useState([])
  return ( 
    <>
<<<<<<< HEAD
    <JobSearch />
     <JobList setWatchList={setWatchList}/>
     <WatchList watchList={watchList} setWatchList={setWatchList}/>
     
=======
     <WatchList watchList={watchList} setWatchList={setWatchList}/>
     <JobList setWatchList={setWatchList}/>
>>>>>>> origin/CODE-BASE
    </>
  )
}

export default App
