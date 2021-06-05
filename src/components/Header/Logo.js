import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from 'react-router'

const Logo = () => {

    const history = useHistory();

    return (
        <Link to={'/'} onClick={() => history.push('/')}>
            <h1 className='text-xl font-bold dark:text-gray-100'>
                Where in the world?
            </h1>

        </Link>
    );
};

export default Logo;
