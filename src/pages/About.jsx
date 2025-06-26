import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About AnimeHub</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <strong>AnimeWorld</strong>, your gateway to the world of anime! 
          This platform allows users to explore seasonal anime, read details, and create an account to keep track of favorites.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          With a simple and clean interface, you can sign up, log in, and enjoy browsing our anime collection
        </p>
        
      </div>
    </div>
  );
};

export default About;
