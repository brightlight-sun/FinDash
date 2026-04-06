// main dashboard layout component that wraps all pages
// contains header, sidebar and footer components
// uses layout context to manage dark mode and sidebar state
// adapts styles based on dark mode and sidebar visibility

import Header from "./Header";
import Sidebar from "./SideBar";
import { useLayout } from "../context/LayoutContext";
import Footer from "./footer";
import "../styles/dashboard-layout.css";

const DashboardLayout = ({ children }) => {

    const { darkMode, sidebarOpen } = useLayout();

    return (

        <div
            className={`dashboard-layout container-fluid px-0 min-vh-100 d-flex flex-column ${darkMode
                ? "bg-black text-light"
                : " text-dark"
                }`}
        >
            <div className="d-flex min-vh-100 position-relative align-items-stretch  ">


                {/* Sidebar */}

                <div
                    className={`sidebar-wrapper ${sidebarOpen ? "sidebar-open" : "sidebar-closed"
                        }`}
                >
                    <Sidebar />
                </div>


                {/* Main Content */}

                <div
                    className={`  main-content-wrapper d-flex flex-column flex-grow-1 min-vh-100 ${sidebarOpen ? "content-shift" : ""
                        }`}
                >

                    <Header />

                    {/* main-content : childrens */}
                    <div
                        className={` main-content p-4 flex-grow-1 ${darkMode ? "bg-dark text-light" : " text-dark"
                            }`}
                    >
                        {children}
                    </div>

                    <Footer />

                </div>


            </div>
        </div>

    );

};

export default DashboardLayout;