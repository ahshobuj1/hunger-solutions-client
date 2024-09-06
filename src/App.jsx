import {Outlet} from 'react-router-dom';
import Navbar from './pages/Shared/Navbar/Navbar';
import Footer from './pages/Shared/Footer/Footer';

const App = () => {
    return (
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#3add2b0c] to-[#1096bb14]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
