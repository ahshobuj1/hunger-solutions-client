import {useEffect, useState} from 'react';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';
import FoodCard from '../../components/FoodCard.jsx/FoodCard';

const AvailableFood = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axiosSecure
            .get('/foods')
            .then((res) => {
                setFoods(res.data);
            })
            .catch((err) => console.log(err.message));
    }, [axiosSecure]);

    return (
        <section>
            <div className="text-center p-5">
                <h2 className="text-3xl mb-5">
                    Ready for Pickup Available Foods
                </h2>
                <p>
                    Browse fresh food donations available for free pickup,
                    provided by generous donors in your area.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </section>
    );
};

export default AvailableFood;
