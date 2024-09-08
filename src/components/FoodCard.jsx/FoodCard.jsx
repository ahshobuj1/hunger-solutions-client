import PropTypes from 'prop-types'; // ES6
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const FoodCard = ({food}) => {
    const {_id, food_image, food_name, donor, date_added} = food;
    //<motion.circle cx={500} animate={{ cx: [null, 100] }} />

    return (
        <motion.div
            initial={{x: -200, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{
                duration: 2,
                delay: 0.5,
                x: {type: 'spring', stiffness: 60},
                opacity: {duration: 1},
                ease: 'easeIn',
            }}>
            <motion.div
                initial={{opacity: 0.6}}
                whileHover={{
                    scale: 1.2,
                    transition: {duration: 1},
                    zIndex: 10,
                }}
                whileTap={{scale: 0.9}}
                whileInView={{opacity: 1}}
                className="card card-compact bg-gradient-to-r from-[#ff000000] to-[#9900002d] shadow-xl p-2 border-2 rounded-xl">
                <figure>
                    <img
                        src={food_image}
                        alt="food"
                        className="rounded-xl h-64"
                    />
                </figure>
                <div className="card-body space-y-2 border-x-2 rounded-md">
                    <h2 className="card-title">{food_name}</h2>
                    <div className="flex gap-5 items-center bg-gray-100 border-2 rounded-lg">
                        <div className="avatar">
                            <div className="w-10 rounded-full ">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div>
                            <p className="font-medium">{donor.donor_name}</p>
                            <p className="font-medium"> {date_added}</p>
                        </div>
                    </div>
                    <Link
                        to={`/foodDetails/${_id}`}
                        className="btn btn-neutral btn-sm ">
                        View Details
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    food: PropTypes.object,
};
