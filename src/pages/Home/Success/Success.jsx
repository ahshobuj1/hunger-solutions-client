import success from '../../../assets/images/success.png';
import {motion} from 'framer-motion';

const Success = () => {
    return (
        <section className="mb-5">
            <motion.div
                initial={{y: -150, opacity: 0}}
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
                <h2 className="text-3xl mb-6">Our Success Story</h2>
                <p className="max-w-[650px] mx-auto">
                    Discover how your support has transformed lives and
                    strengthened our community through inspiring success stories
                    of those we have helped
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
                    }}
                    className="flex justify-center">
                    <img
                        src={success}
                        alt="image of success"
                        className=" max-h-[500px]"
                    />
                </motion.div>
                <motion.div
                    initial={{x: 200, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        x: {type: 'spring', stiffness: 60},
                        opacity: {duration: 1},
                        ease: 'easeIn',
                    }}
                    className="space-y-5">
                    <h2 className="text-3xl">Success</h2>
                    <p>
                        Thanks to the generous donations from our community, the
                        Johnson family, who had been struggling to make ends
                        meet, received essential groceries and meals through our
                        food bank. With this support, they were able to focus on
                        rebuilding their lives without the constant worry of
                        where their next meal would come from. Their gratitude
                        highlights the profound difference our collective
                        efforts make in alleviating food insecurity.
                    </p>
                    <p>
                        Through a successful food drive organized by a local
                        school, over 1,000 pounds of non-perishable food items
                        were collected and distributed to various shelters in
                        our area. This initiative not only provided vital
                        resources to families in need but also empowered
                        students and community members to actively contribute to
                        the fight against hunger. The success of this drive
                        exemplifies the power of community involvement in making
                        a lasting impact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Success;
