import React from 'react';
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const SearchArea = ({search, searchValue, setRegion}) => {
    return (
        <div className='flex lg:flex-row flex-col lg:items-center justify-center lg:justify-between px-4 lg:px-8'>
            <SearchBar search={search} searchValue={searchValue}/>
            <Filter setRegion={setRegion}/>
        </div>
    );
};

export default SearchArea;
