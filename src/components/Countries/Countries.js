import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Card = styled.div`
  width: 80%;
  height: 360px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px;
  display: flex;
  flex-direction: column;
  border-radius: .4rem;
  transition: all .2s ease-in;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
  }
  @media screen and (min-width: 468px) and (max-width: 800px){
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 1024px){
    width: 100%;
  }
`
const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: .4rem .4rem 0 0;
`

const light = {
    fontWeight: 300
}
const medium = {
    fontWeight: 600
}
const bold = {
    fontWeight: 800
}

const Countries = ({name, capital, region, population, flag}) => {
    return (

        <Card className='dark:bg-gray-700'>
            <Link to={`/countries/${name}`}>
                <div className='w-full'>
                    <Img src={flag} alt={name} className='w-full h-full'/>
                </div>
                <div className='p-5'>
                    <h1 style={bold} className='text-xl pb-3 dark:text-gray-100'>{name}</h1>
                    <h3 style={medium} className='dark:text-gray-300'>Population:
                        <span style={light} className='dark:text-gray-300'> {population.toLocaleString()}</span>
                    </h3>
                    <h3 style={medium} className='dark:text-gray-300'>Region:
                        <span style={light} className='dark:text-gray-300'> {region}</span>
                    </h3>
                    <h3 style={medium} className='dark:text-gray-300'>Capital:
                        <span style={light} className='dark:text-gray-300'> {capital}</span>
                    </h3>
                </div>
            </Link>
        </Card>


    );
};

export default Countries;
