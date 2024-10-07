import React, { useState } from 'react';

const Home = ({ addTransaction, balance, clearAllTransactions }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense'); // Default to 'expense'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category) {
      alert('Please enter both amount and category');
      return;
    }

    const transaction = {
      amount: parseFloat(amount),
      category,
      type,
    };

    addTransaction(transaction);
    setAmount('');
    setCategory('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Transaction</h1>
      <p className="text-lg mb-4">Current Balance: ${balance.toFixed(2)}</p>

      <form  onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-2"
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)} className="border rounded p-2">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <div className="flex justify-center">
      <button type="submit" className="bg-blue-500 text-white hover:bg-black rounded p-2 md:w-1/3 mt-4">
          Add Transaction
        </button>
    </div>
      </form>
    
    </div>
    
  );
};

export default Home;
