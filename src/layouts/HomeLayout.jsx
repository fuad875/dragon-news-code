import React from 'react';
import { Outlet } from 'react-router';
import Header from '../conponents/Header';
import LatestNews from '../conponents/LatestNews';
import Navbar from '../conponents/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                   
                    <LatestNews></LatestNews>

                </section>
            </header>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main>
           
              <section className='left_nav'></section>
              <section className='main'>
                  <Outlet></Outlet>
              </section>
            </main>
        </div>
    );
};

export default HomeLayout;