import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 50%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  @media screen and (min-width: 1024px){
    width: 20%;
  }
`

const Filter = ({setRegion}) => {
    return (
            <Select name="" id="" className='mt-6 lg:mt-1 rounded-md placeholder-gray-300 lg:w-3/4 dark:bg-gray-700'>
                <option value="" >
                    Filter by region
                </option>
                <option value="Africa" onClick={(e) => setRegion(e.target.value)}>
                    Africa
                </option>
                <option value="Americas" onClick={(e) => setRegion(e.target.value)}>
                    Americas
                </option>
                <option value="Asia" onClick={(e) => setRegion(e.target.value)}>
                    Asia
                </option>
                <option value="Europe" onClick={(e) => setRegion(e.target.value)}>
                    Europe
                </option>
                <option value="Oceania" onClick={(e) => setRegion(e.target.value)}>
                    Oceania
                </option>
            </Select>
    );
};

export default Filter;
