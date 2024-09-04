const FAQ = () => {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    What types of food can I donate?
                </div>
                <div className="collapse-content">
                    <p>
                        You can donate non-perishable items like canned goods,
                        pasta, rice, cereals, and dried beans. Please ensure
                        that the items are within their expiration dates and are
                        unopened. Some food banks also accept fresh produce,
                        dairy products, and meat, but it’s best to check with
                        your local food bank for specific guidelines.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How can I donate food?
                </div>
                <div className="collapse-content">
                    <p>
                        You can donate food by bringing it to one of our
                        drop-off locations during business hours. We also offer
                        food donation bins at participating grocery stores.
                        Additionally, you can organize a food drive in your
                        community, workplace, or school to collect donations.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I donate homemade food?
                </div>
                <div className="collapse-content">
                    <p>
                        Unfortunately, we cannot accept homemade food due to
                        health and safety regulations. We only accept
                        commercially packaged and sealed food items.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
