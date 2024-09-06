import {useState} from 'react';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';
import useAuth from '../../hooks/UserAuthContext/useAuth';
import MyFoodCard from './MyFoodCard/MyFoodCard';

const ManageFood = () => {
    const [foods, setFoods] = useState([]);
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    axiosSecure
        /*         .get(`/myfoods?email=${user?.email}`)
         */ .get(`/myfoods?email=order@pizzapros.com`)
        .then((res) => {
            setFoods(res.data);
        })
        .catch((err) => console.log(err.message));

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  p-1">
                {foods.map((food) => (
                    <MyFoodCard key={food._id} food={food} />
                ))}
            </div>
        </section>
    );
};

export default ManageFood;
