import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-6xl sm:text-8xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-lg sm:text-xl text-gray-600">Oops! Looks like you're lost.</p>
        <div className="animate-bounce">
          <svg className="mx-auto h-16 w-16 sm:h-20 sm:w-20 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
        <p className="mt-4 text-gray-600">Let's get you back 
          <Link to={"/"} className="text-blue-500"> Home</Link>.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
