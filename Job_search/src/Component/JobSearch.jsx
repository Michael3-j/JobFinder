import React, { useState } from "react";
 


function JobSearch(){

const [currentSearch, setCurrentSearch] = useState("");

function HandleSubmit(event){
    event.preventDefault();
    
   

};

return (
 <label className="searchtab" onSubmit={HandleSubmit}>
     <input
     type="text"
     id="search"
     placeholder="search Company"
     value={currentSearch}
     onChange={(e)=>setCurrentSearch(e.target.value)}
     />
    
    <button type="submit">🔍Search🔎️</button>

    <input
     type="text"
     id="search"
     placeholder="search Position "
     value={currentSearch}
     onChange={(e)=>setCurrentSearch(e.target.value)}
     />
    
    <button type="submit">🔍Search🔎️</button>

    <input
     type="text"
     id="search"
     placeholder="search Location"
     value={currentSearch}
     onChange={(e)=>setCurrentSearch(e.target.value)}
     />
    
    <button type="submit">🔍Search🔎️</button>

 </label>
);
}
export default JobSearch;