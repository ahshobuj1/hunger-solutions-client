import newsLetter from '../../../assets/images/news-2.jpg';

const NewsLetter = () => {
    return (
        <div className="relative max-h-96">
            <img
                src={newsLetter}
                alt="newsLetter"
                className="max-h-96 min-h-60 w-full"
            />
            <div className="absolute top-0 left-0 text-white w-full h-full bg-gradient-to-r from-[#02020243] to-[#02020266] px-10 flex justify-center items-center  text-center">
                <div>
                    <h2 className="text-3xl font-medium underline mb-4  ">
                        Subscribe Our Newsletter
                    </h2>
                    <p>
                        Get free (and early) access to our news, our stories and
                        Hunger Solutions exclusive events
                    </p>
                    <div className="text-center mt-3">
                        <form>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item"
                                />
                                <button className="btn btn-primary join-item">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
