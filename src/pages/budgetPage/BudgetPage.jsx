import React from "react";
import "./BudgetPage.css";
import { Link } from "react-router-dom";

export default function BudgetPage() {
  return (
    <div className="budget-page">
      <header className="header">
        <div className="left-side">
          <h1>Logo</h1>
        </div>
        <div className="right-side">
          <h2>Welcome User</h2>
          <button>Log Out</button>
        </div>
      </header>

      <div className="budget">
        <h1>Budget</h1>
        <Link to="/expense:id">Budget1</Link>
        <Link to="/expense:id">Budget1</Link>
        <Link to="/expense:id">Budget1</Link>
        <Link to="/expense:id">Budget1</Link>
        <Link to="/expense:id">Budget1</Link>
        <button>Create new budget</button>
      </div>

      <div className="expense-result">
        <div>
          <label for="budget">Choose a budget:</label>

          <select name="budget" id="budget">
            <option value="budget1">budget1</option>
            <option value="budget1">budget2</option>
          </select>
        </div>
      </div>
    </div>
  );
}
