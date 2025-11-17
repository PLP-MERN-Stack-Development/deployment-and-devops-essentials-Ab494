import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            MERN Stack
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Production-ready full-stack application with CI/CD & DevOps
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
            >
              View Dashboard
            </Link>
            <a
              href="https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Ab494"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition border border-white/30"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '',
                title: 'Vite + React',
                desc: 'Lightning-fast frontend with modern tooling and hot reload',
              },
              {
                icon: '',
                title: 'Tailwind CSS',
                desc: 'Beautiful, responsive design with utility-first CSS',
              },
              {
                icon: '',
                title: 'CI/CD Pipeline',
                desc: 'Automated testing and deployment with GitHub Actions',
              },
              {
                icon: '',
                title: 'Security First',
                desc: 'Helmet, CORS, rate limiting, and secure headers',
              },
              {
                icon: '',
                title: 'Monitoring',
                desc: 'Error tracking with Sentry and health check endpoints',
              },
              {
                icon: '',
                title: 'Database',
                desc: 'MongoDB Atlas with connection pooling and backups',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition hover:scale-105 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['React 18', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Docker', 'GitHub Actions'].map(
              (tech) => (
                <div key={tech} className="bg-white/10 rounded-lg py-3 px-4 border border-white/20">
                  <p className="text-white font-medium">{tech}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
