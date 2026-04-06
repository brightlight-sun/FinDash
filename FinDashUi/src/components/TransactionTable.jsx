// main transaction table component for transactions page
// also used in dashboard page with limited features
// contains logic for searching, filtering and sorting transactions

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditTransactionModal from './EditTransactionModal';
import AddTransactionModal from './AddTransactionModal';
import {
    addTransaction,
    deleteTransaction,
    updateTransaction,
    setSearchTerm,
    setFilterType,
    setSortOrder
} from '../features/transactions/transactionsSlice';
import { useLayout } from "../context/LayoutContext";




const TransactionTable = () => {

    const { darkMode } = useLayout();

    const dispatch = useDispatch();

    const {
        list: transactions,
        searchTerm,
        filterType,
        sortOrder
    } = useSelector(
        (state) => state.transactions
    );


    const role = useSelector(
        (state) => state.auth.role
    )

    // const [setTransactions] = useState(initialTransactions);

    //modal state
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const handleEditClick = (transaction) => {

        setSelectedTransaction(transaction);

        setEditModal(true);

    };

    const handleUpdateTransaction = (transaction) => {

        dispatch(updateTransaction(transaction));

    };

    // const [newTransaction, setNewTransaction] = useState({
    //     date: "",
    //     category: "",
    //     type: "income",
    //     amount: ""
    // })

    // function to add new transaction to the table
    // const addTransaction = (transaction) => {
    //     const newEntry = {
    //         id: Date.now(),
    //         ...transaction
    //     }
    //     setTransactions([newEntry, ...transactions]);
    // }

    //addition transaction handler for redux
    const handleAddTransaction = (transaction) => {
        dispatch(
            addTransaction({
                id: Date.now(),
                ...transaction
            })
        );
    };

    // Delete transaction handler
    const handleDeleteTransaction = (id) => {

        dispatch(deleteTransaction(id));

    };

    let filteredTransactions = [...transactions];

    //filter states
    // const [searchTerm, setSearchTerm] = useState("");
    // const [filterType, setFilterType] = useState("all");
    // const [sortOrder, setSortOrder] = useState("newest");

    //search logic -> filters category
    filteredTransactions = filteredTransactions.filter((t) =>
        t.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //type filter  logic -> filters income / expense
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
        <div
            className={`card shadow-sm border-0 ${darkMode ? "bg-dark text-light" : ""
                }`}
        >

            <div className="card-body">
                <h5 className="mb-3">Transactions</h5>

                {/* add transaction button */}

                {role === "admin" && (

                    <button
                        className="btn btn-primary mb-3"

                        onClick={() => setShowModal(true)}
                    >
                        + Add Transaction

                    </button>
                )}



                {/* control pannel -> search, sort , filter */}

                <div className="d-flex flex-wrap gap-2 mb-3">

                    <input type="text" className="form-control w-auto"
                        placeholder="Search Category"
                        value={searchTerm}
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))} />

                    <select
                        className="form-select w-auto"
                        value={filterType}
                        onChange={(e) => dispatch(setFilterType(e.target.value))}
                    >
                        <option value="all">All Types</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>

                    </select>

                    <select
                        className="form-select w-auto"
                        value={sortOrder}
                        onChange={(e) => dispatch(setSortOrder(e.target.value))}
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>

                    </select>
                </div>

                {/* transactions table 
                with admim control column */}

                <div className="table-responsive">

                    <table
                        className={`table table-hover align-middle ${darkMode ? "table-dark" : ""
                            }`}
                    >

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


                            {filteredTransactions.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan={role === "admin" ? 5 : 4}
                                        className="text-center text-muted"
                                    >

                                        No transactions found

                                    </td>

                                </tr>

                            ) : (

                                filteredTransactions.map((t) => (

                                    <tr key={t.id}>

                                        <td>{t.date}</td>

                                        <td>{t.category}</td>

                                        <td>
                                            <span
                                                className={`badge ${t.type === "income"
                                                    ? "bg-success"
                                                    : "bg-danger"
                                                    }`}
                                            >
                                                {t.type}
                                            </span>
                                        </td>

                                        <td
                                            className={`fw-semibold ${t.type === "income"
                                                ? "text-success"
                                                : "text-danger"
                                                }`}
                                        >
                                            ₹{t.amount}
                                        </td>

                                        {role === "admin" && (

                                            <td>

                                                <button
                                                    className="btn btn-sm btn-outline-primary me-2"
                                                    onClick={() => handleEditClick(t)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() =>
                                                        handleDeleteTransaction(t.id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        )}

                                    </tr>

                                ))

                            )}

                        </tbody>
                    </table>
                </div>

                <AddTransactionModal

                    showModal={showModal}
                    setShowModal={setShowModal}
                    addTransaction={handleAddTransaction}
                />
                <EditTransactionModal

                    showModal={editModal}

                    setShowModal={setEditModal}

                    selectedTransaction={selectedTransaction}

                    updateTransaction={handleUpdateTransaction}

                />

            </div>
        </div>
    )
};

export default TransactionTable;