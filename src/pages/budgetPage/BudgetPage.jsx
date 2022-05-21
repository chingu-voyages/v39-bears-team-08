import React, { useContext,useEffect } from "react";
import "./BudgetPage.css";
import { Link } from "react-router-dom";
import ExpensesChart from "../../components/expensesChart/ExpensesChart";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function BudgetPage() {
  const { isLoggedIn, userData, budgetList } = useContext(Context);
  let navigate = useNavigate();


useEffect(()=>{
  fetch(`http://localhost:5000/budgets/${userData.data.userID}`).then((response)=>response.json()).then((result)=>{
    console.log('LINE 15 RESULT:',result)
  })

},[])

  console.log("UserID",userData)
  const loginHandler = () => {
    if (isLoggedIn) {
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
          <h2>Welcome </h2>
          <button onClick={loginHandler}>
            {isLoggedIn ? "Sign out" : "Sign in"}
          </button>
          <button onClick={signUp}>{isLoggedIn ? null : "Sign Up"}</button>
        </div>
      </header>

      <div className="budget">
        <h1>Budget</h1>
        {/* [[luisBudget,1],[sagesBudget,2],[sercanBudget,3]] */}
        {budgetList.map((budget, key) => {
              const [budgetName,budgetID] = budget
              const path = `/expense/${budgetID}`
              return (
                <Link to={path} key={key}>
                  {budgetName}
                </Link>
              );
            })}
        <Link to="/newBudget"><button>Create new budget</button></Link>
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
