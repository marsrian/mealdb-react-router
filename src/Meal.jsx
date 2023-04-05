import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Meal = (props) => {
    const {strMeal, strCategory, strInstructions, strMealThumb, idMeal} = props.meal;
    return (
        <div 
            className='flex flex-col px-6 py-4 border border-gray-400'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <img className='w-full' src={strMealThumb} alt="" />
            <h3 className='my-3 text-xl'><span className='font-medium'>Meal Name:</span> {strMeal}</h3>
            <p className='mb-3 text-lg'><span className='font-medium'>Category:</span> {strCategory}</p>
            <button className='w-full py-2 mt-auto text-xl font-bold text-white bg-red-400 rounded-lg'><Link to={`/meal/${idMeal}`}>Show Details</Link></button>
        </div>
    );
};

export default Meal;