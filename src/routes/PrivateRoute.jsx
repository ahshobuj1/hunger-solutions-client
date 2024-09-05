import {Navigate, useLocation} from 'react-router-dom';
import useAuth from '../hooks/UserAuthContext/useAuth';
import PropTypes from 'prop-types'; // ES6
import loadingAnimation from '../assets/animation/loading.json';
import Lottie from 'lottie-react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <Lottie
                animationData={loadingAnimation}
                loop={true}
                className="w-96 text-center mx-auto bg-white   "
            />
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={location.pathname} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
