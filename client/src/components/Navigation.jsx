import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white hover:opacity-80 transition">
            MERN Stack
          </Link>
          <ul className="flex gap-8 items-center">
            <li>
              <Link to="/" className="text-white hover:text-blue-200 transition font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-white hover:text-blue-200 transition font-medium">
                Dashboard
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Ab494"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition font-medium"
              >
                GitHub →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
