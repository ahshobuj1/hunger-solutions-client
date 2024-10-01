import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import banner1 from '../../../assets/images/banner-1.jpg';
import banner2 from '../../../assets/images/banner-2.png';
import banner3 from '../../../assets/images/banner-4.jpg';
//import banner3 from '../../../assets/images/banner-3.jpg';
import Lottie from 'lottie-react';
import foodsAnimation from '../../../assets/animation/foodsAnimation.json';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const BannerHeader = () => {
    return (
        <div>
            <Carousel className="text-center">
                <div className="relative h-[400px] md:max-h-[570px] lg:h-[600px]">
                    <img src={banner1} className="h-full" alt="banner image" />
                    <div className="absolute top-0 left-0 text-white bg-gradient-to-r from-[#00000009] to-[#0000002e] w-full h-full p-5 lg:p-20 grid  grid-cols-2 gap-6 items-center max-h-[570px]">
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                x: {type: 'spring', stiffness: 60},
                                opacity: {duration: 1},
                                ease: 'easeIn',
                            }}
                            className="text-start space-y-2 md:space-y-5 ">
                            <h3 className="text-2xl lg:text-4xl text-teal-500 md:font-medium">
                                Lend a Helping Hand
                            </h3>

                            <h2 className="text-xl md:text-3xl lg:text-5xl md:font-medium ">
                                Only by Helping Each Other We Can Make World
                                Better
                            </h2>
                            <Link
                                to="/available"
                                className="btn-sm btn bg-green-600 hover:bg-teal-500 border-none text-white md:px-10">
                                Explore Foods
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{y: -100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                y: {type: 'spring', stiffness: 60},
                                opacity: {duration: 1},
                                ease: 'easeIn',
                            }}
                            className="flex justify-center items-center">
                            <Lottie
                                className="lg:w-96"
                                animationData={foodsAnimation}
                                loop={true}
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="relative h-[400px] md:max-h-[570px] lg:h-[600px]">
                    <img src={banner2} className="h-full" alt="banner image" />
                    <div className="absolute top-0 left-0 text-white bg-gradient-to-r from-[#0000006e] to-[#0000008f] w-full h-full p-5 lg:p-20 grid  grid-cols-2 gap-6 items-center max-h-[570px]">
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                x: {type: 'spring', stiffness: 60},
                                opacity: {duration: 1},
                                ease: 'easeIn',
                            }}
                            className="text-start space-y-1 md:space-y-5 ">
                            <h3 className="text-2xl lg:text-4xl text-teal-500 md:font-medium">
                                Lend a Helping Hand
                            </h3>

                            <h2 className="text-xl md:text-3xl lg:text-5xl md:font-medium ">
                                Only by Helping Each Other We Can Make World
                                Better
                            </h2>
                            <Link
                                to="/available"
                                className="btn-sm btn bg-green-600 hover:bg-teal-500 border-none text-white md:px-10">
                                Explore Foods
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{y: -100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                y: {type: 'spring', stiffness: 60},
                                opacity: {duration: 1},
                                ease: 'easeIn',
                            }}>
                            <Lottie
                                className="lg:w-96"
                                animationData={foodsAnimation}
                                loop={true}
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="relative h-[400px] md:max-h-[570px] lg:h-[600px]">
                    <img src={banner3} className="h-full" alt="banner image" />
                    <div className="absolute top-0 left-0 text-white bg-gradient-to-r from-[#0000006e] to-[#0000008f] w-full h-full p-5 lg:p-20 grid  grid-cols-2 gap-6 items-center max-h-[570px]">
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                x: {type: 'spring', stiffness: 60},
                                opacity: {duration: 1},
                                ease: 'easeIn',
                            }}
                            className="text-start space-y-1 md:space-y-5 ">
                            <h3 className="text-2xl lg:text-4xl text-teal-500 md:font-medium">
                                Lend a Helping Hand
                            </h3>

                            <h2 className="text-xl md:text-3xl lg:text-5xl md:font-medium ">
                                Only by Helping Each Other We Can Make World
                                Better
                            </h2>
                            <Link
                                to="/available"
                                className="btn-sm btn bg-green-600 hover:bg-teal-500 border-none text-white md:px-10">
                                Explore Foods
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{y: -100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                y: {type: 'spring', stiffness: 60},
                                opacity: {duration: 1},
                                ease: 'easeIn',
                            }}>
                            <Lottie
                                className="lg:w-96"
                                animationData={foodsAnimation}
                                loop={true}
                            />
                        </motion.div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default BannerHeader;
