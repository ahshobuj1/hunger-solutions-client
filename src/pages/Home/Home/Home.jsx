import About from '../About/About';
import BannerHeader from '../BannerHeader/BannerHeader';
import FeaturedFood from '../FeaturedFood/FeaturedFood';

const Home = () => {
    return (
        <section>
            <BannerHeader />
            <About />
            <FeaturedFood />
        </section>
    );
};

export default Home;
