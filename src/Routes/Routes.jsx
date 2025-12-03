import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../LayOuts/HomeLayout/HomeLayout';
import MyProfile from '../LayOuts/MyProfile/MyProfile';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from '../Components/Home/Home';
import DetailsPage from '../Components/toyDetailPage/DetailsPage';
import PrivateRoute from './PrivetRoutes';
import KidsPlayZone from '../Components/KidsPlayZone/KidsPlayZone';
import ForgetPassword from '../Components/forgetPassword/forgetPassword';
import AllItems from '../Components/AllToys/AllItems';
import AboutMe from '../Components/AboutMe/AboutMe';
import Contact from '../Components/ContactUs/ContactUs';
import TermsAndConditions from '../Components/TermsAndCondition/TermsAndCondition';
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy';




const router = createBrowserRouter([
    {
        path:'',
        Component: HomeLayout,
        children:[
            {
                path: '/',
                Component: Home
            },
            {
                path:'/allToys',
                Component: AllItems
            },
            {
                path:'/about',
                Component:AboutMe
            },
            {
                path:'/contact',
                Component: Contact
            },
            {
                path:'/terms',
                Component: TermsAndConditions
            },
            {
                path:'/privacy',
                Component: PrivacyPolicy
            },
           
             {
                 path: '/myprofile',
                element: (
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
                )
             },
             {
                path: '/login',
                Component: Login
             },
             {
            path:'/details',
            element: (
               
                    <DetailsPage></DetailsPage>
               
            )
        },
            {
                path: '/kidsplayzone',
                element: 
                    <KidsPlayZone></KidsPlayZone>
                
            },
             {
                path: '/register',
                Component: Register
             },
             {
                path: '/forgetpassword',
                Component: ForgetPassword
             }
        ]
            
    },
    
    
    {
        path: '/*',
        Component: ErrorPage
    }
   
])
export default router;
