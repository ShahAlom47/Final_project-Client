import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../../CustomHocks/useAdmin";
import Loading from "../SharedComponent/Loading/Loading";


const AdminRoutes = ({ children }) => {
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

        return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
    

  
};

export default AdminRoutes;
AdminRoute.propTypes = {
    children: PropTypes.node.isRequired
};