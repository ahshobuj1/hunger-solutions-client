import PropTypes from 'prop-types'; // ES6

const FoodCard = ({food}) => {
    const {food_image, food_name, donor} = food;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="food"
                />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">Food Name: {food_name}</h2>
                <div className="flex gap-5 items-center">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <p className="font-medium">Donor: {donor.donor_name}</p>
                </div>
                <button className="btn btn-neutral  ">View Details</button>
            </div>
        </div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    food: PropTypes.object,
};
