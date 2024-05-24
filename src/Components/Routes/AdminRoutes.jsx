import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../../CustomHocks/useAdmin";
import Loading from "../SharedComponent/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const AdminRoutes = ({ children }) => {
    const location=useLocation()

    const {user,loading}=useContext(AuthContext);
    const [data,isPending]=useAdmin()

    if (loading||isPending) {
        return <Loading></Loading>
    }

    if (user&& data) {
        return (
            <div>
                {children}
            </div>
        )
    }

        return <Navigate state={location.pathname} to={'/'} replace></Navigate>
    

  
};

export default AdminRoutes;
AdminRoutes.propTypes = {
    children: PropTypes.node.isRequired
};