import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Transactions from './Pages/Transactions';

const App = () => {
  // Retrieve transactions from localStorage when the app initializes
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  
  const [balance, setBalance] = useState(0);

  // Add a new transaction and save to localStorage
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = [...prevTransactions, transaction];
      // Save updated transactions to localStorage
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      return updatedTransactions;
    });
  };

  // Clear all transactions and remove them from localStorage
  const clearAllTransactions = () => {
    setTransactions([]);
    localStorage.removeItem('transactions');
  };

  // Calculate balance whenever transactions change
  useEffect(() => {
    const totalIncome = transactions
      .filter(tx => tx.type === 'income')
      .reduce((acc, tx) => acc + tx.amount, 0);

    const totalExpenses = transactions
      .filter(tx => tx.type === 'expense')
      .reduce((acc, tx) => acc + tx.amount, 0);

    setBalance(totalIncome - totalExpenses);
  }, [transactions]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addTransaction={addTransaction} balance={balance} />} />
        <Route path="/transactions" element={<Transactions transactions={transactions} clearAllTransactions={clearAllTransactions} />} />
      </Routes>
    </Router>
  );
};

export default App;
