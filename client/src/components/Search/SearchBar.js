import React, { useState, useEffect } from 'react';


const SearchBar = ({ projects, onSearch }) =>{
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        if(searchTerm == ''){
            onSearch(projects)
        }
    },[projects])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        
        const filteredProjects = projects.filter(project => {
          return project.title.toLowerCase().includes(event.target.value.toLowerCase())
        });

        onSearch(filteredProjects);
    };
    
    return(
        <div className='searchbar__container'>
            <input 
                type='text' 
                placeholder='Search by Project Title' 
                value={searchTerm}
                onChange={handleSearch}
                className='searchbar'
            />
        </div>
    )
}

export default SearchBar