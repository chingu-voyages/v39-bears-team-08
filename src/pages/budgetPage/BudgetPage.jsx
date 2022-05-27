import React, { useState, useContext, useEffect } from 'react';
import './BudgetPage.css';
import { Link } from 'react-router-dom';
import ExpensesChart from '../../components/expensesChart/ExpensesChart';
import { Context } from '../../Context';
import { useNavigate } from 'react-router-dom';

export default function BudgetPage() {
  const { isLoggedIn, userData, budgetList, setBudgetList, setSelectedChart } =
    useContext(Context);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/budgets/${userData.data.userID}`)
      .then((response) => response.json())
      .then((result) => {
        const budgetsFromDB = result.data;
        setBudgetList(budgetsFromDB);
      });
  }, [userData.data.userID, setBudgetList]);

  console.log('line 12:', budgetList);

  console.log('UserID', userData);
  const loginHandler = () => {
    if (isLoggedIn) {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  const signUp = () => {
    navigate('/createUser');
  };

  console.log(isLoggedIn);

  return (
    <div className='budget-page'>
      <header className='header'>
        <div className='left-side'>
          <h1>Logo</h1>
        </div>
        <div className='right-side'>
          <h2>Welcome </h2>
          <button onClick={loginHandler}>
            {isLoggedIn ? 'Sign out' : 'Sign in'}
          </button>
          <button onClick={signUp}>{isLoggedIn ? null : 'Sign Up'}</button>
        </div>
      </header>

      <div className='budget'>
        <h1>Budget</h1>
        {/* [[luisBudget,1],[sagesBudget,2],[sercanBudget,3]] */}
        {budgetList.map((budget, key) => {
          const [budgetName, budgetID] = budget;
          const path = `/expense/${budgetID}`;
          return (
            <Link to={path} key={key}>
              {budgetName}
            </Link>
          );
        })}
        <Link to='/newBudget'>
          <button>Create new budget</button>
        </Link>
      </div>

      <div className='expense-result'>
        <div>
          <label for='budget'>Choose a budget : </label>
          <select
            name='budget'
            id='budget'
            onChange={(e) => {
              e.preventDefault();
              console.log('hey clicked the Dropdown');
              setSelectedChart(e.target.value);
            }}
          >
            {budgetList.map((budget, key) => {
              const [budgetName, budgetID] = budget;
              // const path = `/expense/${budgetID}`
              return <option value={budgetID}>{budgetName}</option>;
            })}
          </select>
        </div>
      </div>
      <ExpensesChart />
    </div>
  );
}

{
  /* <select
  class='form-select'
  aria-label='Default select example'
  id='period'
  title='Period'
  type='text'
  value={inputsValue.period}
  onChange={handleInputChange}
  name='period'
>
  <option selected>Period</option>
  <option value='one'>Daily</option>
  <option value='two'>Weekly</option>
  <option value='three'>Monthly</option>
</select>; */
}
