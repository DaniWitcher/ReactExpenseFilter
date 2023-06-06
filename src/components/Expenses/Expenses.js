import "./Expenses.css";
import Card from "../UI/Card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

const Expenses = (props) => {
  const [enteredYear, setYear] = useState("2020");

  const saveYearDataHandler = (enteredData) => {
    setYear(enteredData);
  };

  const yearExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === Number(enteredYear)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={enteredYear}
        onYearChanged={saveYearDataHandler}
      />
      <ExpenseChart expenses={yearExpenses} />
      <ExpenseList items={yearExpenses} />
    </Card>
  );
};

export default Expenses;
