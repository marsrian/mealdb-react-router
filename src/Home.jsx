import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='flex flex-col'>
            <Header></Header>
            <div>
                {navigation.state === 'loading' ? <LoadingSpinner></LoadingSpinner> : ''}
            </div>
            <div className='min-h-[calc(100vh-128px)]]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;