import { useState, useEffect } from "react";

const EditTransactionModal = ({
  showModal,
  setShowModal,
  selectedTransaction,
  updateTransaction
}) => {

  const [formData, setFormData] = useState(
    selectedTransaction
  );

  useEffect(() => {

    setFormData(selectedTransaction);

  }, [selectedTransaction]);

  if (!showModal || !formData) return null;

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = () => {

    updateTransaction({
      ...formData,
      amount: Number(formData.amount)
    });

    setShowModal(false);

  };

  return (

    <div className="modal fade show d-block">

      <div className="modal-dialog">

        <div className="modal-content">

          <div className="modal-header">

            <h5 className="modal-title">

              Edit Transaction

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
              value={formData.date}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              className="form-control mb-2"
              value={formData.category}
              onChange={handleChange}
            />

            <select
              name="type"
              className="form-select mb-2"
              value={formData.type}
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
              className="form-control"
              value={formData.amount}
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

              Save Changes

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default EditTransactionModal;