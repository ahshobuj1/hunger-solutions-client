import PropTypes from 'prop-types'; // ES6

const FoodCard = ({food}) => {
    const {food_image, food_name, donor, date_added} = food;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-2">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="food"
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">Food Name : {food_name}</h2>
                <div className="flex gap-5 items-center bg-gray-100">
                    <div className="avatar">
                        <div className="w-10 rounded-full ">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">Donor: {donor.donor_name}</p>
                        <p className="font-medium"> {date_added}</p>
                    </div>
                </div>
                <button className="btn btn-neutral btn-sm ">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    food: PropTypes.object,
};
