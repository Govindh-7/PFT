import React, { useState } from 'react';

const Income = ({ addTransaction }) => {
  const [income, setIncome] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ type: 'income', amount: parseFloat(income), category });
    setIncome('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Add Income</h3>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Income Amount"
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category (e.g., Salary)"
        className="border p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Income
      </button>
    </form>
  );
};

export default Income;
