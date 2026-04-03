import { useDispatch, useSelector } from "react-redux";
import { ROLES } from "../constants/roles";
import { setRole } from "../features/auth/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const role = useSelector((state) => state.auth.role)

    return (
        <div className="d-flex justify-content-between align-items-center bg-white shadow-sm px-4 py-2">

            <h5 className="mb-0">Finance Dashboard</h5>

            <div className="d-flex  align-items-center gap-2">
                <span className="text-muted">Role:</span>
                <select className="form-select w-auto" 
                value={role}
                onChange= {(e) => dispatch(setRole(e.target.value))} >
                    <option value={ROLES.VIEWER}>Viewer</option>
                    <option value={ROLES.ADMIN}>Admin</option>
                </select>
            </div>
        </div>
    )
}

export default Header;