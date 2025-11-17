import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>MERN Stack with CI/CD & DevOps</h1>
        <p>Production-ready application with monitoring and deployment pipelines</p>
      </header>
      <main className="app-main">
        <section className="features">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🚀 Deployed to Cloud</h3>
              <p>Backend on Render, Frontend on Vercel with global CDN</p>
            </div>
            <div className="feature-card">
              <h3>🔄 CI/CD Pipeline</h3>
              <p>Automated testing and deployment with GitHub Actions</p>
            </div>
            <div className="feature-card">
              <h3>📊 Monitoring</h3>
              <p>Error tracking with Sentry and uptime monitoring</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Security First</h3>
              <p>Helmet.js, CORS, rate limiting, and secure headers</p>
            </div>
            <div className="feature-card">
              <h3>💾 Database</h3>
              <p>MongoDB Atlas with connection pooling and backups</p>
            </div>
            <div className="feature-card">
              <h3>📈 Performance</h3>
              <p>Code splitting, lazy loading, and production optimization</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
