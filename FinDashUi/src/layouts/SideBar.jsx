// sidebar component for dashboard layout
// contains navigation links to different pages and adapts to dark mode using layout context
// also toggles sidebar visibility on smaller screens when a link is clicked


import { NavLink } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import logo from "/images/logo.png";
import "../styles/dashboard-layout.css";

const Sidebar = () => {

    const { darkMode } = useLayout();
    const { toggleSidebar } = useLayout();

    return (

        <div
            className={`dashboard-layout sidebar min-vh-100 p-3 h-100 d-flex flex-column ${darkMode
                ? "bg-dark text-light outline-primary border-end"
                : " text-dark border-end"
                }`}
        >

            {/* logo */}
            <NavLink to="/" className="d-flex justify-content-center align-items-center mb-1"
                onClick={toggleSidebar}
            >
                <img
                    src={logo}
                    alt="findash logo"
                    style={{
                        width: "100px", height: "140px",
                        objectFit: "contain"
                    }}
                />

                {/* <span className={`fw-bold ${darkMode ? "text-light" : "text-dark"}`}>FinDash</span> */}
            </NavLink>

            <hr className={`${darkMode ? "border-secondary" : "border-dark"} mb-4`} />

            {/* heading */}
            {/* <h4 className="mb-5 fw-bold">
                <NavLink to="/" className="text-decoration-none">
                    FinDash
                </NavLink>
            </h4> */}


            <ul className="nav flex-column gap-2">

                {/* Dashboard page link */}
                <li className="nav-item">

                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive
                                ? "fw-bold text-primary"
                                : darkMode
                                    ? "text-light"
                                    : "text-dark"
                            }`
                        }
                        to="/"
                        onClick={toggleSidebar}
                    >
                        Dashboard
                    </NavLink>

                </li>

                {/* Transactions page link */}
                <li className="nav-item">

                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive
                                ? "fw-bold text-primary"
                                : darkMode
                                    ? "text-light"
                                    : "text-dark"
                            }`
                        }
                        to="/transactions"

                        onClick={toggleSidebar}
                    >
                        Transactions
                    </NavLink>

                </li>

                {/* Insights page link */}
                <li className="nav-item">

                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive
                                ? "fw-bold text-primary"
                                : darkMode
                                    ? "text-light"
                                    : "text-dark"
                            }`
                        }
                        to="/insights"

                        onClick={toggleSidebar}
                    >
                        Insights
                    </NavLink>

                </li>


            </ul>

        </div>

    );

};

export default Sidebar;