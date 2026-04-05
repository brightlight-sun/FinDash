//resuable widget component

import { useLayout } from "../context/LayoutContext";

const SummaryCard = ({ title, value, color }) => {

    const {darkMode} = useLayout();

    return (
        <div className={`card shadow-sm border-0 h-100 ${
            darkMode ? "bg-dark text-light" : ""
        }
        `}
        >
            <div className="card-body">
                <p className={`darkmode ? : text-white mb-1" : "text-muted mb-1"`}>{title}</p>
                <h4 className={`fw-bold ${color} mb-0}`}>{value}</h4>
            </div>

        </div>
    );
}

export default SummaryCard;