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
                <PrivateRoute>
                    <DetailsPage></DetailsPage>
                </PrivateRoute>
            )
        },
            {
                path: '/kidsplayzone',
                element: <PrivateRoute>
                    <KidsPlayZone></KidsPlayZone>
                </PrivateRoute>
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
