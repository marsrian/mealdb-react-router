import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const MealDetails = () => {
// const food = useLoaderData();
// console.log(food.meals[0]);

    let food = useLoaderData();
    food = food.meals[0];

    const navigateBack = useNavigate();

    const handleNavigateBack = () =>{
        navigateBack(-1);
    }

    return (
        <div>
            <div 
            className='mx-4 md:mx-12 mt-8 border border-gray-400 p-4'
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            >
                <div className='flex flex-col md:flex-row gap-6'>
                    <img className='w-72' src={food.strMealThumb} alt="" />
                    <div>
                        <h3 className='text-xl'><span className='font-medium'>Name:</span> {food.strMeal}</h3>
                        <p className='text-lg'><span className='font-medium'>Area:</span> {food.strArea}</p>
                        <p><span className='font-medium'>Description:</span> {food.strInstructions}</p>
                    </div>
                </div>
            </div>
            <button onClick={handleNavigateBack} className='mx-4 md:mx-12 mt-4'><ArrowLeftCircleIcon className="h-6 w-6 text-blue-500" /></button>
        </div>
    );
};

export default MealDetails;