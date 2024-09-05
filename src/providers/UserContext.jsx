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

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

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
            if (currentUser) {
                setUser(currentUser);
                setLoading(true);
            } else {
                setUser('');
                setLoading(false);
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
