import "./Expenses.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";

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
      {yearExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
