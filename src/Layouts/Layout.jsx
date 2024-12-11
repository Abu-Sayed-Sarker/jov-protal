import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;