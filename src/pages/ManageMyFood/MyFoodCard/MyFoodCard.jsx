import PropTypes from 'prop-types'; // ES6
import {Link} from 'react-router-dom';
import useAxiosSecure from '../../../hooks/AxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';

const MyFoodCard = ({food, foods, setFoods}) => {
    const axiosSecure = useAxiosSecure();

    const {
        _id,
        food_image,
        food_name,
        date_added,
        food_quantity,
        expiry_datetime,
        pickup_location,
    } = food;

    const handleDeleteFood = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/myfoods/${_id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount < 0) {
                            const filter = foods.filter(
                                (foo) => foo._id !== _id
                            );
                            setFoods(filter);
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                            });
                        }
                    })
                    .catch((err) => console.log(err.message));
            }
        });
    };

    return (
        <div className="grid md:grid-cols-2 p-1 md:p-5 gap-5 justify-center items-center bg-gradient-to-r from-[#ff000000] to-[#99000044] rounded-md shadow-xl">
            <div>
                <img src={food_image} alt="images" className="rounded-xl" />
            </div>
            <div>
                <div className="mb-6 space-x-5 ">
                    <Link
                        to={`/foodDetails/${_id}`}
                        className="btn btn-neutral btn-sm">
                        View
                    </Link>
                    <Link
                        to={`/update/${_id}`}
                        className="btn btn-secondary btn-sm">
                        Edit
                    </Link>
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
    foods: PropTypes.array,
    setFoods: PropTypes.func,
};
