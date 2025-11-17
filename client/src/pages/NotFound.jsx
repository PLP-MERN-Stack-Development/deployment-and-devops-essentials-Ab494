import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
        404
      </h2>
      <p className="text-3xl font-bold text-white mb-8">Page Not Found</p>
      <p className="text-white/70 mb-8 max-w-md">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
