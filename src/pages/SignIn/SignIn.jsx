import {useState} from 'react';
import bgImage from '../../assets/images/bg-account.jpg';
import './signIn.css';
import {FaAt, FaEyeSlash, FaEye, FaGoogle, FaFacebook} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/UserAuthContext/useAuth';
//import {Link, useLocation, useNavigate} from 'react-router-dom';
//import {useContext, useState} from 'react';
//import {AuthContext} from '../../context/UserContext';
//import {ToastContainer, toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [show, setShow] = useState(false);
    const {logInUser, loginWithGoogle} = useAuth();

    /*  const {loginUser, loginWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location); */

    //get input value
    const handleFormValue = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        logInUser(email, password)
            .then((res) => {
                console.log(res.user);
                e.target.reset();
            })
            .catch((err) => console.log(err.message));
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="h-[650px] relative">
            <img
                src={bgImage}
                alt="background image"
                className="h-[650px] w-full"
            />

            <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center ">
                <div className="sm:min-w-80 md:w-[400px] h-[460px] p-7 backdrop-blur-[3px] border-2 text-white rounded-md">
                    <h2 className="text-2xl text-center font-semibold">
                        Login
                    </h2>

                    <form onSubmit={handleFormValue}>
                        <div className="relative w-full h-12 border-b-2 border-b-slate-100 my-7">
                            <span className="absolute top-5 right-0">
                                <FaAt />
                            </span>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full h-full text-white text-xl border-0 outline-0 bg-transparent cursor-text px-5 focus"
                            />
                            <label
                                htmlFor="email"
                                className="absolute top-2/4 left-1 -translate-y-2/4 text-2xl text-sky-500 duration-500">
                                Email
                            </label>
                        </div>

                        <div className="relative w-full h-12 border-b-2 border-b-slate-100 my-7">
                            <span
                                className="absolute top-5 right-0"
                                onClick={() => setShow(!show)}>
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            <input
                                name="password"
                                type={show ? 'text' : 'password'}
                                required
                                className="w-full h-full text-white text-xl border-0 outline-0 bg-transparent cursor-text px-5 focus"
                            />
                            <label
                                htmlFor="password"
                                className="absolute top-2/4 left-1 -translate-y-2/4 text-2xl text-sky-500 duration-500">
                                Password
                            </label>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <label>Remember me</label>
                            </div>

                            <Link to="" className="text-blue-600">
                                Forget password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-cyan-500 w-full my-4 border-0 font-semibold text-black">
                            Login
                        </button>
                        {/*    <ToastContainer /> */}

                        <p>Login with social link! </p>
                        <div className="flex space-x-8 justify-center items-center my-3">
                            <a onClick={handleGoogleLogin}>
                                <FaGoogle className="text-3xl p-1 rounded-sm bg-red-500 cursor-pointer" />
                            </a>
                            <a>
                                <FaFacebook className="text-3xl p-1 rounded-sm bg-red-500 cursor-pointer" />
                            </a>
                        </div>

                        <p>
                            Do not have an account!{' '}
                            <Link
                                to="/signup"
                                className="text-blue-600 font-medium">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
