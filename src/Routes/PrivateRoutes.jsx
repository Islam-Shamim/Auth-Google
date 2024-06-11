
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <p className='text-center '><span className="loading loading-dots loading-lg "></span></p>;
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}