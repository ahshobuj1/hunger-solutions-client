import PropTypes from 'prop-types'; // ES6
import useAuth from '../../hooks/UserAuthContext/useAuth';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';

const RequestModal = ({foodDetails}) => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {food_image, food_name, donor, pickup_location, expiry_datetime} =
        foodDetails;

    const handleRequestFood = (e) => {
        e.preventDefault();
        const requestTime = e.target.requestTime.value;

        const requestFood = {
            food_image,
            food_name,
            donorName: donor.donor_name,
            pickup_location,
            expiry_datetime,
            requestTime,
            email: user.email,
        };

        axiosSecure
            .post('/myrequest', requestFood)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err.message));

        console.log(requestFood);
    };

    return (
        <>
            <button
                className="btn btn-neutral px-20"
                onClick={() =>
                    document.getElementById('my_modal_3').showModal()
                }>
                Request for Food
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg mb-5 text-center">
                        Request for Food!
                    </h3>
                    <form onSubmit={handleRequestFood}>
                        <div className="space-y-5">
                            <label className="input input-bordered flex items-center gap-2">
                                Food Name :
                                <input
                                    type="text"
                                    className="grow"
                                    defaultValue={food_name}
                                    readOnly
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Location :
                                <input
                                    type="text"
                                    className="grow"
                                    defaultValue={pickup_location}
                                    readOnly
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Donor :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input
                                    type="text"
                                    className="grow"
                                    defaultValue={donor.donor_name}
                                    readOnly
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Expiration :
                                <input
                                    type="text"
                                    className="grow"
                                    defaultValue={expiry_datetime}
                                    readOnly
                                />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                Request Time :
                                <input
                                    type="date"
                                    className="grow"
                                    name="requestTime"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="btn btn-accent px-10 w-full">
                                Confirm Request
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default RequestModal;

RequestModal.propTypes = {
    foodDetails: PropTypes.object,
};
