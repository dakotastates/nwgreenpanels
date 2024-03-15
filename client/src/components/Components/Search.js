import React, { useState, useEffect } from 'react';

const Search = ({ components, onSearch }) =>{

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        if(searchTerm == ''){
            onSearch(components)
        }
    },[components])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filteredComponents = components?.filter(component => {
            // console.log(component.component_number)
          return component.name.toLowerCase().includes(event.target.value.toLowerCase())||
          component.component_number?.toString().includes(event.target.value);
        });
        // console.log(filteredComponents)
        onSearch(filteredComponents);
    };

    return(
        <div className='searchbar__container'>
            <input 
                type='text' 
                placeholder='Search by Component Name or ID' 
                value={searchTerm}
                onChange={handleSearch}
                className='searchbar'
            />
        </div>
    )
}

export default Search