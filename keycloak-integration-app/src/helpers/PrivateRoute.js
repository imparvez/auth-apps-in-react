import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const [isLogin] = useAuth();
   
    return isLogin ? children : null;
};
   
export default PrivateRoute;