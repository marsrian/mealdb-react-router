import React, { useState } from 'react';
import ActiveLink from './ActiveLink.jsx';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between px-4 py-4 bg-blue-300 md:px-12'>
            <div className='relative flex items-center'>
                <h2 className='text-2xl font-bold text-purple-600'>MarSian</h2>
                <div className='absolute md:hidden -right-52' onClick={() => setOpen(!open)}>
                    {
                        open === true ?
                        <XMarkIcon className="w-6 h-6 text-purple-500" /> 
                        : <Bars3Icon className="w-6 h-6 text-purple-500" />
                    }
                </div>
            </div>
            <div className={`flex flex-col md:flex-row absolute md:static duration-500 bg-blue-300 pb-4 py-2 px-4 md:gap-6 bg-opacity-75 ${open ? 'top-14 left-0 gap-8' : '-top-32'}`}>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/meals'>Meals</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
                <ActiveLink to='/login'>Login</ActiveLink>
            </div>
        </div>
    );
};
// 
export default Header;