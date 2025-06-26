import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-400 transition-colors">
              AniWorld
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
Découvrez le monde incroyable de l’anime avec AniWorld. Votre destination ultime pour des informations sur les animés, des actualités       </p>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="" className="text-gray-600 hover:text-blue-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-600 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-600 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-600 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            
            <div className="flex space-x-4 mb-4 md:mb-0">
              
              
            </div>

           
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} AniWorld. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;