// reusable widget component
// used in dashboard page to show summary of financial data

import { useLayout } from "../context/LayoutContext";

const SummaryCard = ({ title, value, color }) => {

    const { darkMode } = useLayout();

    return (

        <div
            className={`card shadow-sm border-0 h-100 ${
                darkMode
                    ? "bg-secondary text-light"
                    : "bg-white text-dark"
            }`}
        >

            <div className="card-body">

                <p
                    className={`${
                        darkMode
                            ? "text-light"
                            : "text-secondary"
                    } mb-1`}
                >
                    {title}
                </p>

                <h4 className={`fw-bold ${darkMode && color === "text-success" ? "text-warning" : color} mb-0`}>
                    {value}
                </h4>

            </div>

        </div>

    );

};

export default SummaryCard;