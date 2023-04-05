import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';

const Login = () => {
    return (
        <div className='mx-4 my-4 md:mx-12 md:my-8'>
            <h1 className='mb-3 text-xl font-semibold text-center'>Login Now:</h1>
                {/*  */}
            <div className='flex flex-col p-6 mx-auto border border-gray-400 rounded-lg md:w-1/2'>
                <label className='mb-2 font-lg medium' htmlFor="name">Name:</label>
                <input className='mb-2' type="text" name="name" placeholder='Enter your name' />
                <label className='mb-2' htmlFor="email">Email</label>
                <input className='mb-3 font-lg medium' type="email" name="email" placeholder='Enter your Email' />
                <input className='w-full py-3 font-semibold text-white bg-teal-500 rounded-lg' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default Login;