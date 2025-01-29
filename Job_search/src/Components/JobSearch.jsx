import React, { useState } from "react";
 
function SearchJobs(onsearch){

const [currentSearch, setCurrentSearch] = useState("");

function HandleSubmit(event){

    event.preventDefault();

    onsearch(currentSearch);

};

return (
 <form className="searchtab" onSubmit={HandleSubmit}>
     <input
     type="text"
     id="search"
     placeholder="search Jobs"
     value={currentSearch}
     onChange={(e)=>setCurrentSearch(e.target.value)}
     />
    
    <button type="submit">🔍Search🔎️</button>


 </form>
);
}

export default JobSearch;