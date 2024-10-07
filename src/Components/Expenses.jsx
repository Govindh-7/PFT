import React, { useState } from 'react';

const Expenses = ({ addTransaction }) => {
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ type: 'expense', amount: parseFloat(expense), category });
    setExpense('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-red p-6 rounded shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Add Expense</h3>
      <input
        type="number"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Expense Amount"
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category (e.g., Groceries)"
        className="border p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-red-500 text-white p-2 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default Expenses;
