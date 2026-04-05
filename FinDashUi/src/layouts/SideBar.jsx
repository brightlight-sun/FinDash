import { NavLink } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import logo from "/images/logo.png";
const Sidebar = () => {

    const { darkMode } = useLayout();

    return (

        <div
            className={`sidebar min-vh-100 p-3 d-flex flex-column ${darkMode
                ? "bg-dark text-light outline-primary border-end"
                : "bg-white text-dark border-end"
                }`}
        >

            {/* logo */}
            <NavLink to="/" className="d-flex justify-content-center align-items-center mb-1">
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
                    >
                        Dashboard
                    </NavLink>

                </li>


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
                    >
                        Transactions
                    </NavLink>

                </li>


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
                    >
                        Insights
                    </NavLink>

                </li>


            </ul>

        </div>

    );

};

export default Sidebar;