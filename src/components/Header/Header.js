import React from 'react';
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

const Header = () => {
    return (
        <div className='flex justify-between items-center px-6 shadow-md dark:bg-gray-700'>
            <Logo/>
            <ThemeButton/>
        </div>
    );
};

export default Header;
