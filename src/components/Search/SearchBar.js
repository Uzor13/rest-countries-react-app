import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  height: 50px;
  padding-left: 1rem;
  border: none;
  outline: none;
  ::placeholder {
    font-family: 'Nunito Sans', sans-serif;
  }
  @media screen and (min-width: 1024px){
    width: 40%;
  }
`

const SearchBar = ({search, searchValue}) => {
    return (
        <Input type="search"
               placeholder='Search for a country'
               className='placeholder-gray-300 rounded-md lg:w-1/2 dark:bg-gray-700 focus:ring-2'
               value={searchValue}
               onChange={search}
        />
    );
};

export default SearchBar;
