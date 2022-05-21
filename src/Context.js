import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Context = React.createContext();

function ContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState("");
  const [budgetList, setBudgetList] = useState([]);
  const [expenseList,setExpenseList] = useState({})

  return (
    <Context.Provider
      value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, budgetList, setBudgetList,expenseList,setExpenseList }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
