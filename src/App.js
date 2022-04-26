import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BudgetPage from "./pages/budgetPage/BudgetPage";
import Expenses from "./components/expenses/Expenses";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/budgetpage" element={<BudgetPage />}></Route>
        <Route path="/expenses" element={<Expenses />}></Route>
      </Routes>
    </div>
  );
}

export default App;
