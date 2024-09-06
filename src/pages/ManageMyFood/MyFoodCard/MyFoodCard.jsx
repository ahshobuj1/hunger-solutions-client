import PropTypes from 'prop-types'; // ES6
import {Link} from 'react-router-dom';
import useAxiosSecure from '../../../hooks/AxiosSecure/useAxiosSecure';

const MyFoodCard = ({food}) => {
    const axiosSecure = useAxiosSecure();

    const {
        _id,
        food_name,
        date_added,
        food_quantity,
        expiry_datetime,
        pickup_location,
    } = food;

    const handleDeleteFood = () => {
        axiosSecure
            .delete(`/myfoods/${_id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="grid md:grid-cols-2 p-1 md:p-5 gap-5 justify-center bg-gradient-to-r from-[#ff000000] to-[#99000044] rounded-md shadow-xl">
            <div>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="images"
                    className="rounded-xl"
                />
            </div>
            <div>
                <div className="mb-6 space-x-5 ">
                    <Link
                        to={`/foodDetails/${_id}`}
                        className="btn btn-neutral btn-sm">
                        View
                    </Link>
                    <button className="btn btn-secondary btn-sm">Edit</button>
                    <button
                        onClick={handleDeleteFood}
                        className="btn btn-error text-white btn-sm">
                        Del
                    </button>
                </div>
                <div className="space-y-3">
                    <h2 className="text-3xl ">{food_name}</h2>
                    <p>Quantity : {food_quantity}</p>
                    <p>Added : {date_added}</p>
                    <p>Expiry : {expiry_datetime}</p>
                    <p>Location : {pickup_location}</p>
                </div>
            </div>
        </div>
    );
};

export default MyFoodCard;

MyFoodCard.propTypes = {
    food: PropTypes.object,
};
