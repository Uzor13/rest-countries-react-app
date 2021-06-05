import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import styled from 'styled-components';
import CountryDetail from "./CountryDetail";
import Loader from "react-loader-spinner";


const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const Country = () => {

    const {name} = useParams()

    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false)

    const getCountryData = async () => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_URL}name/${name}`)
        const country = await response.json()
        setCountry(country)
        setLoading(false)
        console.log(country)
    }

    useEffect(() => {
        getCountryData().catch(err => err.message)
    }, [])

    return (
        <>
            <div>
                <Link to={'/'}>
                    <Button
                        className='px-5 py-1 mx-4 rounded-md space-x-2 font-medium text-gray-700 mt-6 dark:text-gray-300'>
                        <i className='fas fa-arrow-left'/>
                        <span>Back</span>
                    </Button>
                </Link>
            </div>
            <div>
                {loading ? <div className='flex justify-center items-center'>
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs

                        /></div> :
                    <div>
                        {
                            country.map(country => {
                                const {
                                    flag, name, population, region, capital, numericCode,
                                    subregion, nativeName, topLevelDomain, currencies, languages, borders
                                } = country
                                return (
                                    <CountryDetail
                                        key={numericCode}
                                        flag={flag}
                                        name={name}
                                        population={population}
                                        region={region}
                                        subregion={subregion}
                                        capital={capital}
                                        nativeName={nativeName}
                                        topLevelDomain={topLevelDomain}
                                        currencies={currencies}
                                        languages={languages}
                                        borders={borders}
                                    />
                                )
                            })
                        }
                    </div>
                }
            </div>
        </>
    );
};

export default Country;
