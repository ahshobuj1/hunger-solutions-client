import {useEffect, useState} from 'react';
import useAxiosSecure from '../../hooks/AxiosSecure/useAxiosSecure';
import useAuth from '../../hooks/UserAuthContext/useAuth';
import Table from './Table/Table';

const RequestFood = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axiosSecure
            .get(`/myrequest?email=${user?.email}`)
            .then((res) => {
                console.log(res.data);
                setFoods(res.data);
            })
            .catch((err) => console.log(err.message));
    }, [axiosSecure, user?.email]);

    return (
        <section className="bg-gradient-to-r from-[#00bbff0c] to-[#12990007] ">
            <h1 className="text-3xl text-center font-medium my-5 underline">
                My Requested Foods!
            </h1>

            <div>
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <th></th>
                                <th>Expiration</th>
                                <th> Donor</th>
                                <th>Request date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods?.map((food) => (
                                <Table key={food._id} food={food} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default RequestFood;
