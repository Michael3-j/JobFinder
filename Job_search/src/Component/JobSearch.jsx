import React from "react"


function JobSearch({searchCompany,searchPosition,searchLocation,setSearchCompany,setSearchLocation,setSearchPosition,handleSearchCompany, handleSearchPosition,handleSearchLocation}) {
    
    function handleSearchCompany (e) {
        setSearchCompany(e.target.value)
        setSearchLocation('')
        setSearchPosition('')
    }
    function handleSearchPosition (e) {
        setSearchPosition(e.target.value)
        setSearchCompany('')
        setSearchLocation('')
    }
    function handleSearchLocation (e) {
        setSearchLocation(e.target.value)
        setSearchCompany('')
        setSearchPosition('')
    }
   
return( 
<> 
<label>
                    <input 
                    id="search-input"
                      name="search"
                      type="text"
                      placeholder="Search position"
                      value={searchPosition}
                      onChange={handleSearchPosition}
                    />
            </label>
            <label>
                    <input 
                    id="search-input"
                      name="search"
                      type="text"
                      placeholder="Search company"
                      value={searchCompany}
                      onChange={handleSearchCompany}
                    />
            </label>
            <label>
                    <input 
                    id="search-input"
                      name="search"
                      type="text"
                      placeholder="Search location"
                      value={searchLocation}
                      onChange={handleSearchLocation}
                    />
            </label>


</>

)}
export default JobSearch;