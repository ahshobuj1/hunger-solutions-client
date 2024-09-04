import success from '../../../assets/images/success.png';

const Success = () => {
    return (
        <section className="mb-5">
            <div className="text-center px-5 mt-20 mb-10">
                <h2 className="text-3xl mb-6">Our Success Story</h2>
                <p className="max-w-[650px] mx-auto">
                    Discover how your support has transformed lives and
                    strengthened our community through inspiring success stories
                    of those we have helped
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-2">
                <div className="flex justify-center">
                    <img
                        src={success}
                        alt="image of success"
                        className=" max-h-[500px]"
                    />
                </div>
                <div className="space-y-5">
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
                </div>
            </div>
        </section>
    );
};

export default Success;
