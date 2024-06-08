'use client'
import React from 'react'

const SearchBar = () => {
  return (
    <form className='searchbar'>
        <div className='searchbar__input-main'>
          <input type="text" name="" id="" placeholder='Volkswagen' className='searchbar__input1'/>
          <input type="text" name="" id="" placeholder='Tugan' className='searchbar__input2'/>
        </div>
        <span className='searchbar__icon'></span>
    </form>
  )
}

export default SearchBar