import React from "react"


function JobSearch({search,setSearch,handleSearch}) {
    
    function handleSearch (e) {
        setSearch(e.target.value)
    }
   
return( 
<div className="searchnavbar" >
  <span className="searchtitle">Find your preferred job:</span>
<label>
                    <input 
                    id="search-input"
                      name="search"
                      type="text"
                      placeholder="Search Here!"
                      value={search}
                      onChange={handleSearch}
                    />
            </label>
            
</div>





)}
export default JobSearch;