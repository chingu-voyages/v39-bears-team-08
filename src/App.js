import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import BudgetPage from "./pages/budgetPage/BudgetPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/budgetpage" element={<BudgetPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
