import React from 'react';
import Lottie from "lottie-react";
import meal from './assets/meal.json'
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/login');
    }

    return (
        <div className='grid items-center h-[100vh-80px-24px] grid-cols-1 gap-8 mx-4 md:grid-cols-2 md:mx-12'>
            <div>
                <h1 className='my-5 text-5xl font-bold text-blue-500'>MarSian Food Restaurant</h1>
                <p className='mb-5 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi, fuga esse rerum deleniti minus nisi alias nihil officiis saepe laudantium exercitationem eaque, corporis quibusdam velit commodi dolorum unde dolore amet rem suscipit? Animi perferendis, repudiandae, ab cupiditate incidunt dicta sint quam aspernatur delectus magni nemo modi, repellendus vitae amet?</p>
                <button className='px-8 py-3 mr-3 font-semibold text-white bg-teal-500 rounded-lg'><Link to="/about">Show More</Link></button>
                <button onClick={handleNavigate} className='px-8 py-3 font-semibold text-white bg-orange-500 rounded-lg'>Login Now</button>
            </div>
            <div className='w-72 md:w-full'>
                <Lottie 
                    animationData = {meal}
                    loop= {true}>
                </Lottie>
            </div>
        </div>
    );
};

export default HomePage;