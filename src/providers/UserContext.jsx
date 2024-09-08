import {useEffect, useState} from 'react';
import {createContext} from 'react';
import PropTypes from 'prop-types'; // ES6
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import useAxiosSecure from '../hooks/AxiosSecure/useAxiosSecure';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login in user with email and password
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google login
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Github sign In
    const logInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    // log out user
    const logOutUser = () => {
        return signOut(auth);
    };

    // Get current User
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userLogged = currentUser?.email || user?.email;
            const currentEmail = {email: userLogged};

            if (currentUser) {
                setUser(currentUser);
                setLoading(false);

                axiosSecure
                    .post('/jwt', currentEmail, {withCredentials: true})
                    .then((res) => {
                        console.log('json web token', res.data);
                    })
                    .catch((err) => console.log(err.message));
            } else {
                setUser('');
                setLoading(false);

                axiosSecure
                    .post('/logout', currentEmail, {
                        withCredentials: true,
                    })
                    .then((res) => console.log(res.data));
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        logInUser,
        logOutUser,
        loginWithGoogle,
        logInWithGithub,
        user,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};
