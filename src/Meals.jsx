import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Meals = () => {
    const meals = useLoaderData();

    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center text-red-400 my-6'>MarsSian Restaurant Foods: {meals.meals.length}</h1>
            <div className='grid grid-cols-1 gap-6 px-12 md:grid-cols-3'>
                {
                    meals.meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;