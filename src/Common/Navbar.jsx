import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


const Navbar = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate()

    const Logoutbtn = () => {
        signOut(auth)
            .then(() => {
                alert("log out success");
                navigate("/")
            })
            .catch(error => {
                console.log(error.message);


            })
    }






    const Links = <>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <button onClick={Logoutbtn} className="btn bg-sky-300 hover:bg-sky-500">Log out</button> : <div className="flex gap-3">
                            <NavLink to={'/register'}><button className="btn bg-sky-300 hover:bg-sky-500">Register</button></NavLink>
                            <NavLink to={'/login'}><button className="btn bg-sky-300 hover:bg-sky-500">Log In</button></NavLink>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;