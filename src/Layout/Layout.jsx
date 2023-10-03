import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="max-w-[1150px] mx-auto font-poppins">
            
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;