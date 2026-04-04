import { useState } from 'react';
import { useSelector } from 'react-redux';
import { transactions } from '../mockdata/transactions';

const TransactionTable = () => {

    const role = useSelector((state) => state.auth.role);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortOrder, setSortOrder] = useState("newest");

    let filteredTransactions = [...transactions];

    //search logic -> filters category
    filteredTransactions = filteredTransactions.filter((t) =>
        t.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //filter  logic -> filters income / expense
    if (filterType !== "all") {
        filteredTransactions = filteredTransactions.filter((t) => t.type === filterType);
    }

    //sorting ligic -> sorts latest/oldest
    filteredTransactions.sort((a, b) => {
        if (sortOrder === "newest") {
            return new Date(b.date) - new Date(a.date);
        }
        else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    return (
        <div className="card shadow-sm border-0">

            <div className="card-body">
                <h5 className="mb-3">Transactions</h5>
                {/* control panner -> search, sort , filter */}

                <div className="d-flex flex-wrap gap-2 mb-3">

                    <input type="text" className="form-control w-auto"
                        placeholder="Search Category"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />

                    <select
                        className="form-select w-auto"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="all">All Types</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>

                    </select>

                    <select 
                        className="form-select w-auto"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>

                    </select>
                </div>

                {/* transactions table with admit control column */}
                <div className="table-responsive">

                    <table className="table table-hover align-middle">

                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Type</th>
                                <th>Amount</th>

                                {role === "admin" && (
                                    <th>Actions</th>
                                )}

                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((t) => (

                                <tr key={t.id}>
                                    <td>{t.date}</td>
                                    <td>{t.category}</td>

                                    <td>
                                        <span
                                            className={`badge ${t.type === "income" ? "bg-success" : "bg-danger"}`}
                                        >
                                            {t.type}
                                        </span>
                                    </td>

                                    <td
                                        className={`fw-semibold 
                                            ${t.type === "income" ? "text-success" : "text-danger"}`}
                                    >

                                        ₹{t.amount}

                                    </td>

                                    {role === "admin" && (

                                        <td>

                                            <button className="btn btn-sm btn-outline-primary me-2">Edit</button>

                                            <button className="btn btn-sm btn-outline-danger">Delete</button>

                                        </td>
                                    )}
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TransactionTable;