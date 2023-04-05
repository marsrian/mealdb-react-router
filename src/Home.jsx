import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='flex flex-col h-[100vh]'>
            <Header></Header>
            <div>
                {navigation.state === 'loading' ? <LoadingSpinner></LoadingSpinner> : ''}
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;