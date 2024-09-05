import {Link, NavLink} from 'react-router-dom';
import useAuth from '../../../hooks/UserAuthContext/useAuth';

const Navbar = () => {
    const {user, logOutUser} = useAuth();

    const handleLogout = () => {
        logOutUser()
            .then()
            .catch((err) => console.log(err.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/available">Available Food</NavLink>
            </li>
            <li>
                <NavLink to="/add">Add Food</NavLink>
            </li>
            <li>
                <NavLink to="/manage">Manage My Food</NavLink>
            </li>
            <li>
                <NavLink to="/request">My Food Request</NavLink>
            </li>
        </>
    );

    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <a className=" text-xl md:text-3xl italic font-medium text-fuchsia-600 ">
                            <span className="text-2xl md:text-4xl text-bold text-green-600 ">
                                H
                            </span>
                            unger
                            <span className="text-2xl md:text-4xl text-bold text-green-600 ">
                                S
                            </span>
                            olutions
                        </a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={
                                            user?.photoURL === null
                                                ? 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                                : user.photoURL
                                        }
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between text-xs">
                                        {user.email}
                                        <span className="badge text-xs">
                                            New
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink to="/signin">
                            <button className="btn btn-neutral btn-sm">
                                Login
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Navbar;
