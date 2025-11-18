import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet,  } from 'react-router';


const HomeLayout = () => {
    
    return (

        <>
        

        <div className="min-h-screen flex flex-col">
            
            <header>
                <section  className='w-10/12 mx-auto '>
                    <Navbar></Navbar>
                </section>
            </header>

            <main className="flex-grow">
               <section className='w-10/12 mx-auto'>
                   <Outlet></Outlet>
               </section>
            </main>


            <footer>
                <section className='w-10/12 mx-auto'>
                    <Footer></Footer>
                </section>
            </footer>
        </div>
        </>
        
    );
};

export default HomeLayout;
