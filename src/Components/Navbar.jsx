import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/transactions" className="text-white hover:underline">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
