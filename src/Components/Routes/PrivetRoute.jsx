
import PropTypes from 'prop-types';
const PrivetRoute = ({children}) => {
    return (
        <div>
            {children}
            
        </div>
    );
};

export default PrivetRoute;
PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired
  };