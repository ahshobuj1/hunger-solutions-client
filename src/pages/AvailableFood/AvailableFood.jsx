import {useEffect, useState} from 'react';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';
import FoodCard from '../../components/FoodCard.jsx/FoodCard';
import Pagination from './Pagination/Pagination';

const AvailableFood = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(6);

    const totalPages = Math.ceil(count / limit);

    const pages = [...Array(totalPages).keys()]; // range / sequence array

    const handlePerPageItems = (e) => {
        setLimit(e.target.value);
        setCurrentPage(0);
        console.log(e.target.value);
    };

    useEffect(() => {
        axiosSecure
            .get(`/foods?page=${currentPage}&limit=${limit}`)
            .then((res) => {
                setCount(res.data.totalDocuments);
                setFoods(res.data.result);
            })
            .catch((err) => console.log(err.message));
    }, [axiosSecure, currentPage, limit]);

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
                {foods?.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
            <div className="space-x-3 md:flex md:justify-center my-5 px-5">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="btn btn-sm btn-neutral">
                    Prev
                </button>
                {pages.map((page) => (
                    <Pagination
                        key={page}
                        page={page}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                ))}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                    className="btn btn-sm btn-neutral">
                    Next
                </button>

                <select onChange={handlePerPageItems}>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="15">15</option>
                    <option value="21">21</option>
                </select>
            </div>
        </section>
    );
};

export default AvailableFood;
