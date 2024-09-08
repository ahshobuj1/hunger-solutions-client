import {useEffect, useState} from 'react';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';
import useAuth from '../../hooks/UserAuthContext/useAuth';
import MyFoodCard from './MyFoodCard/MyFoodCard';

const ManageFood = () => {
    const [foods, setFoods] = useState([]);
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    useEffect(() => {
        axiosSecure
            .get(`/myfoods?email=${user?.email}`, {withCredentials: true})
            .then((res) => {
                setFoods(res.data);
            })
            .catch((err) => console.log(err.message));
    }, [axiosSecure, user?.email]);

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  p-1">
                {foods.map((food) => (
                    <MyFoodCard
                        key={food._id}
                        food={food}
                        foods={foods}
                        setFoods={setFoods}
                    />
                ))}
            </div>
        </section>
    );
};

export default ManageFood;
