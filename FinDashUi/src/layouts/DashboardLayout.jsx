import Header from "./Header";
import Sidebar from "./SideBar";
import { useLayout } from "../context/LayoutContext";


const DashboardLayout = ({ children }) => {

    const { darkMode, sidebarOpen } = useLayout();

    return (

        <div
            className={`container-fluid px-0 vh-100 ${darkMode
                ? "bg-black text-light"
                : "bg-light text-dark"
                }`}
        >

<div className="d-flex min-vh-100 position-relative">


                {/* Sidebar */}

                <div
                    className={`sidebar-wrapper ${sidebarOpen ? "sidebar-open" : "sidebar-closed"
                        }`}
                >
                    <Sidebar />
                </div>


                {/* Main Content */}

                <div
    className={`main-content-wrapper d-flex flex-column ${
        sidebarOpen ? "content-shift" : ""
    }`}
>

                    <Header />

                    <div className="p-4 flex-grow-1">

                        {children}

                    </div>

                </div>


            </div>

        </div>

    );

};

export default DashboardLayout;