import React from 'react'
import Expenses from "./components/expenses/Expenses";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BudgetPage from "./pages/budgetPage/BudgetPage";


function App() {
  return (
    <div className="App">
      <Expenses />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/budgetpage" element={<BudgetPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
