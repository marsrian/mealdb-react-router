import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-68px)]'>
            <p className='text-7xl font-thin'>L</p>
            <div className='border-8 border-dashed border-red-500 animate-spin rounded-full mt-5 w-10 h-10'>
            </div>
            <p className='text-7xl font-thin'>ading....</p>
        </div>
    );
};

export default LoadingSpinner;