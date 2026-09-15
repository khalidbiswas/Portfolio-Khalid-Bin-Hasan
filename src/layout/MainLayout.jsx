import React from 'react';
import Header from '../components/navbar/Header'
import Home from '../pages/home/Home'
import Footer from '../components/footer/Footer';
const MainLayout = () => {

    return (
        <div className='bg-[#1B211A]'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
