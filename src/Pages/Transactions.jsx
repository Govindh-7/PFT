import React from 'react';

const Transactions = ({ transactions,clearAllTransactions }) => {
  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);
  
  const totalExpenses = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">All Transactions</h1>
      <h2 className="text-lg">Summary</h2>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>
      {transactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((transaction, index) => (
            <li key={index} className="bg-gray-300 p-4 rounded shadow-md">
              <p className="font-bold">{transaction.type === 'income' ? 'Income' : 'Expense'}</p>
              <p>Amount: ${transaction.amount.toFixed(2)}</p>
              <p>Category: {transaction.category}</p>
            </li>
          ))}
        </ul>
      )}
    
  
      <button 
        onClick={clearAllTransactions} 
        className="mt-4 bg-blue-500 hover:bg-red-500 text-white rounded p-2"
      >
        Clear All Transactions
      </button>
      </div>
  );
};

export default Transactions;
