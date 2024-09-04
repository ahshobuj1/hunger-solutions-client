import Lottie from 'lottie-react';
import animation from '../../assets/animation/404-error.json';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center">
            <div className="max-w-[500px] mx-auto">
                <Lottie animationData={animation} loop={true} />
            </div>
            <Link to="/">
                <button className="btn my-5 btn-accent">Back to home</button>
            </Link>
        </div>
    );
};

export default Error;
