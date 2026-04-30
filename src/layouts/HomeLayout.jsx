import React from 'react';
import { Outlet } from 'react-router';
import Header from '../conponents/Header';
import LatestNews from '../conponents/LatestNews';
import Navbar from '../conponents/Navbar';
import Leftside from '../conponents/homelayout/Leftside';
import Rightside from '../conponents/homelayout/Rightside';

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
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12'>
             <aside className='col-span-3'>
                <Leftside></Leftside>
             </aside>
              <section className='main col-span-6'>
                  <Outlet></Outlet>
              </section>
              <aside className='col-span-3'>
                <Rightside></Rightside>
              </aside>
            </main>
        </div>
    );
};

export default HomeLayout;