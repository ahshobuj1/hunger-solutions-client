import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home/Home';
import Error from '../components/Error/Error';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import AvailableFood from '../pages/AvailableFood/AvailableFood';
import SingleFood from '../pages/SingleFood.jsx/SingleFood';

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
            {
                path: '/available',
                element: <AvailableFood />,
            },
            {
                path: '/foodDetails/:id',
                element: <SingleFood />,
                loader: ({params}) =>
                    fetch(`http://localhost:5000/foods/${params.id}`),
            },
        ],
    },
]);

export default router;
