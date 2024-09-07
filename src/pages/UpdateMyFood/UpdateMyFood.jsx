import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';
import {useForm} from 'react-hook-form';
import {useLoaderData, useNavigate} from 'react-router-dom';

const UpdateMyFood = () => {
    const food = useLoaderData();
    const {register, handleSubmit} = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const {
        _id,
        food_image,
        food_name,
        food_quantity,
        expiry_datetime,
        pickup_location,
        additional_notes,
    } = food;

    const onSubmit = (data) => {
        console.log(data);

        axiosSecure
            .patch(`/myfoods/${_id}`, data)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your foods has been Updated successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/myFood');
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <section className="p-10 md:h-screen">
            <div className="space-y-6 mb-6">
                <h2 className="text-center text-2xl md:text-3xl font-medium ">
                    Update Food!
                </h2>
                <p>
                    Welcome to the food donation page! Here, you can easily
                    contribute to our mission of fighting hunger by donating
                    food. Fill in the required details below to list your
                    donation. Make sure to include information about the food
                    items, their quantity, and expiration date. After
                    submitting, your donation will be reviewed and made
                    available to those in need.
                </p>
                <p className="font-medium">
                    Thank you for making a difference!
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:grid md:grid-cols-2 space-y-5 md:space-y-0 gap-6">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('food_name')}
                            type="text"
                            className="grow"
                            defaultValue={food_name}
                            placeholder="Food Name"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('food_image')}
                            type="text"
                            className="grow"
                            defaultValue={food_image}
                            placeholder="Photo URL"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('food_quantity')}
                            type="text"
                            defaultValue={food_quantity}
                            className="grow"
                            placeholder="Quantity"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('pickup_location')}
                            type="text"
                            className="grow"
                            defaultValue={pickup_location}
                            placeholder="Pickup Location"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        Expire date:
                        <input
                            {...register('expiry_datetime')}
                            type="date"
                            defaultValue={expiry_datetime}
                            className="grow"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('additional_notes')}
                            type="text"
                            className="grow"
                            defaultValue={additional_notes}
                            placeholder="Additional Notes"
                        />
                    </label>

                    <button className="col-span-2 btn btn-neutral w-full">
                        Update Food
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UpdateMyFood;
