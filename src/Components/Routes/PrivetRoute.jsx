
import PropTypes from 'prop-types';
import { useContext } from 'react';
import  { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../SharedComponent/Loading/Loading';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    


    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return (
            <div>
                {children}
            </div>
        )
    }

        return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
    
}


export default PrivetRoute;
PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired
};