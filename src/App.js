import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BudgetPage from './pages/budgetPage/BudgetPage';
import Expenses from './components/expenses/Expenses';
import SignInPage from './pages/signInPage/signInPage';
import SignUp from './pages/singUpPage/signUpPage';

import NewBudget from './pages/createBudget/CreateBudget';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/budgetpage' element={<BudgetPage />}></Route>
        <Route path='/expense/:id' element={<Expenses />}></Route>
        <Route path='/' element={<SignInPage />}></Route>
        <Route path='/newbudget' element={<NewBudget />}></Route>
        <Route path='/createUser' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
