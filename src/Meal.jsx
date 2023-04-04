import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {strMeal, strCategory, strInstructions, strMealThumb, idMeal} = props.meal;
    return (
        <div className='flex flex-col px-6 py-4 border border-gray-400'>
            <img className='w-full' src={strMealThumb} alt="" />
            <h3 className='my-3 text-xl font-medium'>Meal Name: {strMeal}</h3>
            <p className='mb-3 text-lg font-medium'>Category: {strCategory}</p>
            <button className='w-full py-2 mt-auto text-xl font-bold text-white bg-red-400 rounded-lg'><Link to={`/meal/${idMeal}`}>Show Details</Link></button>
        </div>
    );
};

export default Meal;