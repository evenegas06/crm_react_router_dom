import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <h1 className="text-6xl font-bold">
                CRM - React Router DOM
            </h1>

            <Outlet />
        </>
    );
};
export default Header;