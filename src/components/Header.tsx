import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="mx-auto"> 
        <ul className="flex space-x-4 justify-center"> 
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-white hover:underline">About</Link></li>
          <li><Link to="/blog" className="text-white hover:underline">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;