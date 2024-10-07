import React from 'react';

const Summary = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Summary</h3>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Remaining Balance: ${balance}</p>
    </div>
  );
};

export default Summary;
