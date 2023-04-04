import React from 'react';
import Lottie from "lottie-react";
import meal from './assets/meal.json'

const HomePage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-12 my-4'>
            <div>
                <h1 className='text-3xl font-bold text-blue-500 mb-3'>MarSian Food Restaurant</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aspernatur illum suscipit aperiam reiciendis temporibus doloremque ut quidem aut nulla.</p>
            </div>
            <div className='w-48 h-48'>
                <Lottie 
                    animationData = {meal}
                    loop= {true}>
                </Lottie>
            </div>
        </div>
    );
};

export default HomePage;