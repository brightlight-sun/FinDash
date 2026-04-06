// footer component for dashboard layout
// contains copyright info and developer credit
// uses layout context to adapt to dark mode

import { useLayout } from "../context/LayoutContext";
import "../styles/dashboard-layout.css";

const Footer = () => {
    const { darkMode } = useLayout();

    return (
        <div
            className={`footer text-center py-2 shadow-sm ${darkMode ? "bg-dark text-light  border-top border-secondary" : " text-dark "
                }`}
        >
            &copy; 2026
            <br />
            Made by {" "}
            <a
                href="https://github.com/brightlight-sun"
                className={`text-decoration-none ${darkMode ? "text-info " : "text-primary"}`}
            >
                brightlight-sun
            </a>
            {" "}✨

        </div>
    )
};

export default Footer;