import about from '../../../assets/images/about-us.jpg';
import FAQ from '../../../components/FAQ/FAQ';
import {motion} from 'framer-motion';

const About = () => {
    return (
        <section>
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
                className="text-center px-5 mt-20 mb-10">
                <h2 className="text-3xl mb-6">Welcome to Hunger Solutions</h2>
                <p className="max-w-[650px] mx-auto">
                    Choose us for a seamless donation experience that ensures
                    your contributions make a direct impact on local hunger
                    relief efforts.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-2">
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
                    }}>
                    <img src={about} alt="about us" className="rounded-xl" />
                </motion.div>
                <motion.div
                    initial={{x: 150, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 5,
                        delay: 3,
                        x: {type: 'spring', stiffness: 60},
                        opacity: {duration: 1},
                        ease: 'easeIn',
                    }}
                    className="space-y-5">
                    <h2 className="text-3xl">Why choose us ? </h2>
                    <p>
                        At Hunger Solutions, we are committed to alleviating
                        hunger by connecting generous donors with local food
                        banks and shelters. Our platform makes it easy to
                        contribute and make a meaningful impact in our community
                    </p>
                    <p>
                        Dedicated to fighting food insecurity, Hunger Solutions
                        simplifies food donations and partners with community
                        organizations to ensure every contribution supports
                        those in need effectively.
                    </p>
                    <div>
                        <div>
                            <FAQ />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
