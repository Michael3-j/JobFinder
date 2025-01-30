import JobList from "./JobList";
import JobSearch from "./Component/JobSearch";
import WatchList from "./components/WatchList";
import { useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);

  return ( 
    <>
      <JobSearch />
      <WatchList watchList={watchList} setWatchList={setWatchList} />
      <JobList setWatchList={setWatchList} />
    </>
  );
}

export default App;