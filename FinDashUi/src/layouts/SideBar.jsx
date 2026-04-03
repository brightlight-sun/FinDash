import { NavLink } from "react-router-dom";

const  Sidebar = () => {
return (
    <div className="bg-dark text-white vh-100 p-3">
        <h4 className="mb-4">FinDash</h4>
        <ul className="nav flex-column gap-2">
            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">Dashboard</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/transactions">Transactions</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/insights">Insights</NavLink>
            </li>
        </ul>
    </div>
)
}

export default Sidebar;