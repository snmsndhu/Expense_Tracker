import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="desciprtion" className="form-label">
          Desciprtion
        </label>
        <input id="desciprtion" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="catergory" className="form-select"></select>
        <option value=""></option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </div>
    </form>
  );
};

export default ExpenseForm;
