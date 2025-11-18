import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading) return <p>Loading...</p>;

  if(user){
    return children;
  }else{
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default PrivateRoute;
