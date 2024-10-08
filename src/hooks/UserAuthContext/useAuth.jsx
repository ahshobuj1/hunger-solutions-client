import {useContext} from 'react';
import {AuthContext} from '../../providers/UserContext';

const useAuth = () => {
    const authInfo = useContext(AuthContext);

    return authInfo;
};

export default useAuth;
