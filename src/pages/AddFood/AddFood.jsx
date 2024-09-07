import {useForm} from 'react-hook-form';
import useAuth from '../../hooks/UserAuthContext/useAuth';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

const AddFood = () => {
    const {user} = useAuth();
    const {register, handleSubmit} = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const date_added = moment().format('MMMM Do YYYY, h:mm:ss a');

        const foodData = {
            ...data,
            date_added,
            email: user?.email,
            donor: {donor_image: user?.photoURL, donor_name: user?.email},
        };
        console.log(foodData);

        axiosSecure
            .post('/foods', foodData)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your foods has been uploaded',
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
                    Add Foods To Treat Hungry People!
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
                            placeholder="Food Name"
                            required
                        />
                    </label>
                    {/*   {errors.foodName && (
                        <p className="text-red-500">Food name is required</p>
                    )} */}
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('food_image')}
                            type="text"
                            className="grow"
                            placeholder="Photo URL"
                            required
                        />
                    </label>
                    {/*                     {errors.url && <p>Photo URL is required</p>}
                     */}
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('food_quantity')}
                            type="text"
                            className="grow"
                            placeholder="Quantity"
                            required
                        />
                    </label>
                    {/*                     {errors.quantity && <p>Photo URL is required</p>}
                     */}
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('pickup_location')}
                            type="text"
                            className="grow"
                            placeholder="Pickup Location"
                            required
                        />
                    </label>
                    {/*                     {errors.location && <p>Set foods location</p>}
                     */}
                    <label className="input input-bordered flex items-center gap-2">
                        Expire date:
                        <input
                            {...register('expiry_datetime')}
                            type="date"
                            className="grow"
                            required
                        />
                    </label>
                    {/*                     {errors.expire && <p>Set foods expiration date</p>}
                     */}
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            {...register('additional_notes')}
                            type="text"
                            className="grow"
                            placeholder="Additional Notes"
                            required
                        />
                    </label>
                    {/*                     {errors.notes && <p>Set foods expiration date</p>}
                     */}
                    <button className="col-span-2 btn btn-neutral w-full">
                        Add Food
                    </button>
                </div>

                {/*    <div className="md:grid md:grid-cols-2 space-y-5 md:space-y-0 gap-6">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Food Name"
                            name="name"
                            required
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Photo URL"
                            name="url"
                            required
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Quantity"
                            required
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Pickup Location"
                            name="location"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Expire date:
                        <input type="date" className="grow" name="expire" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Additional Notes"
                            name="note"
                        />
                    </label>

                    <button className="col-span-2 btn btn-neutral w-full">
                        Add Food
                    </button>
                </div> */}
            </form>
        </section>
    );
};

export default AddFood;
