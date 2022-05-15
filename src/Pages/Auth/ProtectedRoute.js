import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useLocation, Navigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading';

const ProtectedRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading/>
    }
    if(!user){
       return <Navigate to='/login' state={{from: location}} replace/>
    }
    return children;
};

export default ProtectedRoute;