import About from '../About/About';
import BannerHeader from '../BannerHeader/BannerHeader';
import FeaturedFood from '../FeaturedFood/FeaturedFood';
import NewsLetter from '../NewsLetter/NewsLetter';
import Success from '../Success/Success';

const Home = () => {
    return (
        <section>
            <BannerHeader />
            <About />
            <FeaturedFood />
            <Success />
            <NewsLetter />
        </section>
    );
};

export default Home;
