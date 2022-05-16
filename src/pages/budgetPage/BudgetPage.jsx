import React, { useContext } from "react";
import "./BudgetPage.css";
import { Link } from "react-router-dom";
import ExpensesChart from "../../components/expensesChart/ExpensesChart";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function BudgetPage() {
  const { isLoggedIn, userData, budgetList } = useContext(Context);
  let navigate = useNavigate();

  console.log("UserID", userData);
  const loginHandler = () => {
    if (isLoggedIn) {
      navigate("/");
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  const signUp = () => {
    navigate("/createUser");
  };

  console.log(isLoggedIn);

  return (
    <div className="budget-page">
      <header className="header">
        <div className="left-side">
          <h1>Logo</h1>
        </div>
        <div className="right-side">
          <h2>Welcome {userData.firstame} </h2>
          <button onClick={loginHandler}>
            {isLoggedIn ? "Sign out" : "Sign in"}
          </button>
          <button onClick={signUp}>{isLoggedIn ? null : "Sign Up"}</button>
        </div>
      </header>

      <div className="budget">
        <h1>Budget</h1>
        {budgetList.map((budget, key) => {
          return (
            <Link to="/expense:id" key={key}>
              {budget}
            </Link>
          );
        })}
        <Link to="/newBudget">
          <button>Create new budget</button>
        </Link>
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
      <ExpensesChart />
    </div>
  );
}
