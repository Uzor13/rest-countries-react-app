import React from 'react';
import { DarkModeToggle } from 'tailwind-darkmode-toggle';

const ThemeButton = () => {
    return (
        <DarkModeToggle className='w-10 h-10 text-gray-800 dark:text-gray-300' />
    );
};

export default ThemeButton;
