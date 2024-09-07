import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home/Home';
import Error from '../components/Error/Error';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import AvailableFood from '../pages/AvailableFood/AvailableFood';
import SingleFood from '../pages/SingleFood.jsx/SingleFood';
import ManageFood from '../pages/ManageMyFood/ManageFood';
import RequestFood from '../pages/RequestFood/RequestFood';
import AddFood from '../pages/AddFood/AddFood';
import PrivateRoute from './PrivateRoute';
import UpdateMyFood from '../pages/UpdateMyFood/UpdateMyFood';

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
                element: (
                    <PrivateRoute>
                        <SingleFood />
                    </PrivateRoute>
                ),
                loader: ({params}) =>
                    fetch(
                        `https://hunger-solutions-server.vercel.app/foods/${params.id}`
                    ),
            },
            {
                path: '/myFood',
                element: (
                    <PrivateRoute>
                        <ManageFood />
                    </PrivateRoute>
                ),
            },
            {
                path: '/request',
                element: (
                    <PrivateRoute>
                        <RequestFood />
                    </PrivateRoute>
                ),
            },
            {
                path: '/add',
                element: (
                    <PrivateRoute>
                        <AddFood />
                    </PrivateRoute>
                ),
            },
            {
                path: '/update/:id',
                element: (
                    <PrivateRoute>
                        <UpdateMyFood />
                    </PrivateRoute>
                ),
                loader: ({params}) =>
                    fetch(
                        `https://hunger-solutions-server.vercel.app/foods/${params.id}`
                    ),
            },
        ],
    },
]);

export default router;
