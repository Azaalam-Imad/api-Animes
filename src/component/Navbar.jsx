import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/Context';

const Navbar = () => {
    const nnav = useNavigate
    const {mostakhdim,found} = useContext(Mycontext)
  return (
    <nav className="bg-white shadow-md  w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          AniWorld
        </Link>

      
        <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
          
        </div>
    {mostakhdim ? (
  <span className='font-bold '>{mostakhdim.Name}</span>
) : (
  <Link to="/Login" className="hover:text-blue-600 transition-colors">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
      Login
    </button>
  </Link>
)}


        
      </div>
    </nav>
  );
};

export default Navbar;
