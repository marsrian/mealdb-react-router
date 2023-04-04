import React from 'react';
import ActiveLink from './ActiveLink.jsx';

const Header = () => {
    return (
        <div className='justify-between px-4 py-4 mx-12 bg-teal-100 md:flex'>
            <div>
                <h2 className='text-2xl font-bold text-purple-600'>Mars Rian</h2>
            </div>
            <div className='flex flex-col gap-6 md:flex-row font-medium'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/meals'>Meals</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
                <ActiveLink to='/login'>Login</ActiveLink>
            </div>
        </div>
    );
};

export default Header;