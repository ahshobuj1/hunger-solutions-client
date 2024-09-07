import PropTypes from 'prop-types'; // ES6
import {MdDelete} from 'react-icons/md';

const Table = ({food}) => {
    const {
        food_image,
        food_name,
        donorName,
        pickup_location,
        expiry_datetime,
        requestTime,
    } = food;

    return (
        <>
            <tr>
                <th>
                    <label>
                        <button className="btn btn-sm rounded-full btn-neutral text-xl">
                            <MdDelete />
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={food_image}
                                    alt="Avatar Tailwind CSS Component"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{food_name}</div>
                            {/*  <div className="text-sm opacity-50"></div> */}
                        </div>
                    </div>
                </td>
                <td>
                    {pickup_location}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                        {pickup_location}
                        {expiry_datetime}
                    </span>
                </td>
                <td>{donorName}</td>
                <th>{requestTime}</th>
            </tr>
        </>
    );
};

export default Table;

Table.propTypes = {
    food: PropTypes.object,
};
