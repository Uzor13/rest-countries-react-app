import React, {useEffect, useState} from "react";
import CountriesList from "./components/Countries/CountriesList";
import GridContainer from "./components/Layout/GridContainer";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SearchArea from "./components/Search/SearchArea";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Country from "./components/Countries/Country";
import { ThemeScriptTag } from 'tailwind-darkmode-toggle';
import { ThemeProvider } from 'tailwind-darkmode-toggle';

function App() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('');
    const [region, setRegion] = useState('')

    const search = async (e) => {
        await setSearchValue(e.target.value)
    }

    const fetchCountries = async () => {
        setLoading(true)
        const response = await fetch(`https://restcountries.eu/rest/v2/all`)
        const countries = await response.json()
        setCountries(countries)
        setLoading(false)
    }

    const getCountryData = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    const getCountryByRegion = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }


    useEffect(() => {
        fetchCountries().catch((error) => console.log(error.message))
        getCountryData().catch(err => err.message)
        getCountryByRegion().catch(err => err.message)
    }, [searchValue, region]);


    return (
        <ThemeProvider>
            <ThemeScriptTag/>
            <div className="h-full w-full dark:bg-gray-800 dark:text-gray-200">
                <GridContainer className='h-full'>
                    <Router>
                        <Header/>
                        <Route exact path='/'>
                            <SearchArea search={search} searchValue={searchValue} setRegion={setRegion}/>
                            <CountriesList countries={countries} loading={loading}/>
                        </Route>
                        <Route path='/countries/:name' children={<Country/>}/>
                    </Router>
                </GridContainer>

            </div>
        </ThemeProvider>

    );
}

export default App;
