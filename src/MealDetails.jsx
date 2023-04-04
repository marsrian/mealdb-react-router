import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
// const food = useLoaderData();
// console.log(food.meals[0]);

   let food = useLoaderData();
    food = food.meals[0];

    return (
        <div className='mx-12 mt-8 border border-gray-400 p-4'>
            <div className='flex flex-col md:flex-row gap-6'>
                <img className='w-72' src={food.strMealThumb} alt="" />
                <div>
                    <h3 className='text-xl'><span className='font-medium'>Name:</span> {food.strMeal}</h3>
                    <p className='text-lg'><span className='font-medium'>Area:</span> {food.strArea}</p>
                    <p><span className='font-medium'>Description:</span> {food.strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;