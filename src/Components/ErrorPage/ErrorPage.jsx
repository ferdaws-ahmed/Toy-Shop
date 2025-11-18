import React from 'react';
import errorImg from '../../assets/error-page.png'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-center items-center min-h-screen flex-col'>
            <Helmet>
        <title>🚨 Oops! Page Not Found</title>
      </Helmet>
             <img src={errorImg} alt="" />
             <Link to='/'><button className='btn'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;
