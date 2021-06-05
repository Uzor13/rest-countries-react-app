import React from 'react';
import Countries from "./Countries";
import Loader from "react-loader-spinner";
import styled from 'styled-components'


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2rem;
  justify-items: center;
  @media screen and (min-width: 468px) and (max-width: 1025px){
    grid-template-columns: repeat(2, 1fr);
    gap: .8rem;
  }
  @media screen and (min-width: 1026px){
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

`

const CountriesList = ({countries, loading}) => {
    return (
        <>
            {loading ? <div className='flex justify-center items-center h-screen'>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                </div> :
                <Grid className='p-4 pb-3 items-center mx-auto h-full'>
                    {countries.map(country => {
                        const {alpha2Code, alpha3Code, name, population, region, capital, flag} = country
                        return (
                            <Countries
                                key={alpha2Code}
                                alpha3Code={alpha3Code}
                                flag={flag}
                                name={name}
                                population={population}
                                region={region}
                                capital={capital}
                            />
                        )
                    })}
                </Grid>}
        </>
    );
};

export default CountriesList;
