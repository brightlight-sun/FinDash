import { useDispatch, useSelector } from "react-redux";
import { ROLES } from "../constants/roles";
import { setRole } from "../features/auth/authSlice";
import { useLayout } from "../context/LayoutContext";

const Header = () => {
    const dispatch = useDispatch();
    const role = useSelector((state) => state.auth.role)

    const { darkMode, toggleDarkMode, toggleSidebar } = useLayout();

    return (
        <div
            className={`d-flex justify-content-between align-items-center shadow-sm px-4 py-2 ${darkMode
                ? "bg-dark text-light border-bottom border-secondary"
                : "bg-white text-dark border-bottom"
                }`}
        >


            {/* left section */}
            <div className="d-flex align-items-center gap-2">
                <button
                    className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-secondary"
                        }`}
                    onClick={toggleSidebar}
                >
                    ☰
                </button>
                <h5 className="mb-0 fw-semibold">Finance Dashboard</h5>
            </div>

            {/* right section */}

            <div className="d-flex  align-items-center gap-3">

                <div className="d-flex align-items-center gap-2">

                    <span className={darkMode ? "text-light" : "text-muted"}>
                        Role:
                    </span>
                    <select className={`form-select w-auto ${darkMode ? "bg-dark text-light border-secondary" : ""
                        }`}
                        value={role}
                        onChange={(e) => dispatch(setRole(e.target.value))} >
                        <option value={ROLES.VIEWER}>Viewer</option>
                        <option value={ROLES.ADMIN}>Admin</option>
                    </select>
                </div>

            


            <button
                className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-secondary"
                    }`}
                onClick={toggleDarkMode}
            >
                {darkMode ? "Light Mode " : "Dark Mode  "}
            </button>

        </div>
        </div>
    )
}

export default Header;