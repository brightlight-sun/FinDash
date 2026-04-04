// separted from TransactionTable.jsx

import { useState } from "react";

const AddTransactionModal = ({
  showModal,
  setShowModal,
  addTransaction
}) => {

  const [formData, setFormData] = useState({
    date: "",
    category: "",
    type: "expense",
    amount: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = () => {

    if (
      !formData.date ||
      !formData.category ||
      !formData.amount
    ) {
      alert("Fill all fields");
      return;
    }

    addTransaction({
      ...formData,
      amount: Number(formData.amount)
    });

    setShowModal(false);

  };

  if (!showModal) return null;

  return (

    <div className="modal fade show d-block">

      <div className="modal-dialog">

        <div className="modal-content">

          <div className="modal-header">

            <h5 className="modal-title">
              Add Transaction
            </h5>

            <button
              className="btn-close"
              onClick={() => setShowModal(false)}
            />

          </div>

          <div className="modal-body">

            <input
              type="date"
              name="date"
              className="form-control mb-2"
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              className="form-control mb-2"
              onChange={handleChange}
            />

            <select
              name="type"
              className="form-select mb-2"
              onChange={handleChange}
            >
              <option value="income">
                Income
              </option>

              <option value="expense">
                Expense
              </option>

            </select>

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              className="form-control"
              onChange={handleChange}
            />

          </div>

          <div className="modal-footer">

            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AddTransactionModal;