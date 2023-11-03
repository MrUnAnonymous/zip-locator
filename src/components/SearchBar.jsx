import React from 'react'
import './styles.css'
import search_icons from './Assets/search.png'

const SearchBar = ( { searchText , setSearchText , setButtonClicked, buttonClicked } ) => {


  return (
    <div className='search-container'>
      <div className='search'>
          <input 
              type="text"
              placeholder='Enter Zip Code'
              className='search-bar'
              value={searchText}
              onChange={ (e) => setSearchText(e.target.value) } 
              onKeyDown = {(key) => key.code === 'Enter' && setButtonClicked(true)}
          />
          <div className='icon' onClick={() => setButtonClicked(true)}>
            <img 
              src={search_icons} 
              alt="Search Icon" 
            />
          </div>
      </div>
    </div>
  )
}

export default SearchBar