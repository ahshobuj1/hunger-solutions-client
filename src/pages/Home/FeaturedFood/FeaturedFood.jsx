import {useEffect, useState} from 'react';
import FoodCard from '../../../components/FoodCard.jsx/FoodCard';
import {Link} from 'react-router-dom';
import useAxiosSecure from '../../../hooks/AxiosSecure/useAxiosSecure';

const FeaturedFood = () => {
    const [foods, setFoods] = useState([]);
    const axiosSecure = useAxiosSecure();

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
            <div className="text-center px-5 mt-20 mb-10">
                <h2 className="text-3xl mb-6">Featured Foods</h2>
                <p className="max-w-[650px] mx-auto">
                    Discover our top picks of the day, carefully selected for
                    their flavor and quality. Each dish is crafted with love and
                    generosity, ready to delight your taste buds.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
                {foods.slice(0, 6).map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
            <div className="text-center ">
                <Link to="/available" className="btn btn-secondary my-2 px-10">
                    Explore All
                </Link>
            </div>
        </section>
    );
};

export default FeaturedFood;
