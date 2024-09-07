import {useLoaderData} from 'react-router-dom';
import RequestModal from '../../components/RequestModal/RequestModal';

const SingleFood = () => {
    const foodDetails = useLoaderData();
    const {
        //food_image,
        food_name,
        donor,
        food_quantity,
        pickup_location,
        expiry_datetime,
        additional_notes,
        date_added,
    } = foodDetails;

    return (
        <div className="hero bg-slate-50 min-h-screen p-2 md:p-10 bg-gradient-to-r from-[#ff000021] to-[#99000004] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    //src={food_image}
                    className="max-w-lg rounded-lg shadow-2xl"
                />
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold  text-violet-600">
                        Food : {food_name}
                    </h1>
                    <h3 className="text-lg">
                        <span className="font-bold ">Food Quantity</span> :{' '}
                        {food_quantity}
                    </h3>
                    <h3 className="text-lg">
                        <span className="font-bold ">Pickup Location</span> :{' '}
                        {pickup_location}
                    </h3>

                    <h3 className="text-lg">
                        <span className="font-bold ">Expiry Datetime</span> :{' '}
                        {expiry_datetime}
                    </h3>
                    <h3 className="text-lg">
                        <span className="font-bold ">Additional Notes</span> :{' '}
                        {additional_notes}
                    </h3>
                    <p className="py-6">
                        Easily request the food items you need by filling out
                        the form below. Let donors know what you are looking
                        for, and they will help provide available donations in
                        your community.
                    </p>
                    <div className="flex gap-5 items-center bg-gray-100">
                        <div className="avatar">
                            <div className="w-10 rounded-full ">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="donor images"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="font-medium">
                                Donor: {donor.donor_name}
                            </p>
                            <p className="font-medium"> {date_added}</p>
                        </div>
                    </div>

                    <div>
                        <RequestModal foodDetails={foodDetails} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;
