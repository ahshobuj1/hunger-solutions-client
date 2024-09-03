import {useEffect, useState} from 'react';
import FoodCard from '../../../components/FoodCard.jsx/FoodCard';

const FeaturedFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('public/foodItems.json')
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

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
                {foods.map((food) => (
                    <FoodCard key={food.expiry_datetime} food={food} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedFood;
