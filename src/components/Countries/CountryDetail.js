import React from 'react';
import {Link} from "react-router-dom";


const light = {
    fontWeight: 300
}
const medium = {
    fontWeight: 600
}
const bold = {
    fontWeight: 800
}


const CountryDetail = ({
                           flag, name, borders, capital,
                           currencies, languages, nativeName, population,
                           region, subregion, topLevelDomain
                       }) => {
    return (
        <div className='flex flex-col lg:flex-row p-4 gap-4 h-screen justify-around items-center'>
            <div className='lg:w-2/5'>
                <img src={flag} alt="" className='lg:w-full'/>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <h1 style={bold} className='text-2xl pb-5'>{name}</h1>
                    <div className='flex lg:flex-row flex-col gap-8'>
                        <div className='flex flex-col justify-around gap-2'>
                            <h3 style={medium}>Native Name:
                                <span style={light}> {nativeName}</span>
                            </h3>
                            <h3 style={medium}>Population:
                                <span style={light}> {population.toLocaleString()}</span>
                            </h3>
                            <h3 style={medium}>Region:
                                <span style={light}> {region}</span>
                            </h3>
                            <h3 style={medium}>Subregion:
                                <span style={light}> {subregion}</span>
                            </h3>
                            <h3 style={medium}>Capital:
                                <span style={light}> {capital}</span>
                            </h3>
                        </div>

                        <div className='flex flex-col justify-around gap-2 lg:gap-1'>
                            <h3 style={medium}>Top Level Domain:
                                <span style={light}> {topLevelDomain}</span>
                            </h3>
                            <h3 style={medium}>Currencies: {currencies.map(currency => (
                                <span style={light} key={currency.code}>{currency.name + ', '}</span>
                            ))}</h3>
                            <h3 style={medium}>Languages: {languages.map(language => (
                                <span style={light} key={language.code}>{language.name + ', '}</span>
                            ))}</h3>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-6'>
                    <h2 style={medium}>Borders: </h2>
                    <div className='flex gap-4 flex-wrap'>
                        {borders.map(border => (
                            <Link to={``}>
                                <button className='px-7 py-1 shadow-md rounded-md'>
                                    {border}
                                </button>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CountryDetail;
