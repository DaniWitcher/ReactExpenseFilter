import "./Expenses.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [enteredYear, setYear] = useState("");

  const saveYearDataHandler = (enteredData) => {
    setYear(enteredData);
  };

  return (
    <div>
      <ExpenseFilter onYearChanged={saveYearDataHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
