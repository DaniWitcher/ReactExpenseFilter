import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    startEditingToggler();
  };

  const startEditingToggler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingToggler}>Add New Expense!</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={startEditingToggler}
        />
      )}
    </div>
  );
};

export default NewExpense;
