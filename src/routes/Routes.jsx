import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home/Home';
import Error from '../components/Error/Error';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
        ],
    },
]);

export default router;
