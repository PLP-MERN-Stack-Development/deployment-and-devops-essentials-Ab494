# MERN Stack Application with CI/CD & DevOps

A production-ready **MERN (MongoDB, Express, React, Node.js)** stack application with complete CI/CD pipelines, error monitoring, and deployment configurations.

> **Now with Vite ⚡ + Tailwind CSS 🎨 for lightning-fast frontend development!**

## 🌟 Features

✅ **Full-Stack Architecture**
- **Frontend**: React 18 + Vite (⚡ 5-10x faster builds) + Tailwind CSS (🎨 responsive design)
- **Backend**: Express.js with security headers (Helmet), rate limiting, and structured logging
- **Database**: MongoDB Atlas with connection pooling and automated backups

✅ **Production-Ready Security**
- Helmet.js for secure HTTP headers
- CORS configuration with credentials
- Rate limiting on API endpoints
- Input validation and error handling
- Sentry integration for error tracking

✅ **CI/CD Pipeline**
- GitHub Actions workflows for automated testing and deployment
- Separate CI workflows for frontend and backend
- Automated code quality checks (ESLint, Prettier)
- Unit tests with coverage reporting

✅ **Monitoring & Observability**
- Health check endpoints (`/api/health`, `//api/health/ready`)
- Structured logging with Pino
- Error tracking with Sentry
- Performance monitoring
- Uptime monitoring support

✅ **Cloud Deployment**
- Backend: Deployed on **Render** (free tier available)
- Frontend: Deployed on **Vercel** (optimized for React)
- Both support automatic deployments from GitHub
- Custom domain support

✅ **Developer Experience**
- Docker Compose for local development
- Environment variable management
- Development and production configurations
- Comprehensive documentation
- **Both servers run with single command: `npm run dev`**

---

## 📋 Prerequisites

Before you start, ensure you have:

- **Node.js** 18+ and npm
- **Git** for version control
- **GitHub** account
- **MongoDB Atlas** account (free tier available)
- **Render** account (for backend deployment)
- **Vercel** account (for frontend deployment)

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Ab494.git
cd deployment-and-devops-essentials-Ab494
```

### 2. Install All Dependencies

```bash
npm run install:all
```

### 3. Configure Environment Variables

**Backend** - Create `server/.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
FRONTEND_URL=http://localhost:3000
```

**Frontend** - Create `client/.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Run Both Servers Together 🎉

```bash
npm run dev
```

This starts:
- **Backend API**: `http://localhost:5000` 🚀
- **Frontend App**: `http://localhost:3000` ⚛️
- **Auto-reload**: Both have hot module reloading

**Open `http://localhost:3000` in your browser!**

---

## 🐳 Docker Setup (Local Development)

Run the entire stack with Docker Compose:

```bash
npm run docker:up
```

This starts:
- MongoDB on `localhost:27017`
- Backend on `http://localhost:5000`
- Frontend on `http://localhost:3000`

Stop the stack:

```bash
npm run docker:down
```

---

## 📊 Project Structure

```
.
├── client/                          # React + Vite + Tailwind
│   ├── src/
│   │   ├── main.jsx                 # Vite entry point
│   │   ├── index.css                # Tailwind + custom styles
│   │   ├── pages/                   # Home, Dashboard, NotFound
│   │   ├── components/              # Reusable components
│   │   └── App.jsx                  # Main app with routing
│   ├── vite.config.js               # Vite config + API proxy
│   ├── tailwind.config.js           # Tailwind theme config
│   ├── postcss.config.js            # PostCSS for Tailwind
│   ├── package.json
│   ├── Dockerfile
│   └── vercel.json                  # Vercel deployment config
│
├── server/                          # Express Backend
│   ├── src/
│   │   ├── server.js                # Main server file
│   │   ├── config/
│   │   │   └── database.js          # MongoDB connection
│   │   ├── middleware/
│   │   │   └── errorHandler.js      # Error handling
│   │   ├── routes/
│   │   │   └── health.js            # Health checks
│   │   └── __tests__/               # Jest tests
│   ├── package.json
│   ├── Dockerfile
│   ├── jest.config.js
│   └── .eslintrc.json
│
├── .github/workflows/               # CI/CD Workflows
│   ├── backend-ci.yml               # Backend testing
│   ├── backend-cd.yml               # Backend deployment
│   ├── frontend-ci.yml              # Frontend testing (Vite)
│   └── frontend-cd.yml              # Frontend deployment (Vercel)
│
├── deployment/                      # Deployment configs
│   ├── render.yaml
│   ├── render-deploy.sh
│   └── vercel-deploy.sh
│
├── monitoring/                      # Monitoring setup
│   ├── sentry-config.js
│   └── MONITORING_SETUP.md
│
├── docker-compose.yml               # Local dev environment
├── package.json                     # Root with unified scripts
└── README.md                        # This file
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
NODE_ENV=development
PORT=5000
LOG_LEVEL=info
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
FRONTEND_URL=http://localhost:3000
SENTRY_DSN=
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env.local)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📝 Available NPM Scripts

```bash
# Development
npm run dev                 # Run both frontend & backend
npm run dev:backend        # Backend server only
npm run dev:frontend       # Frontend (Vite) only

# Building
npm run build              # Build both for production
npm run build:client       # Build React (outputs to dist/)
npm run build:server       # Prepare backend

# Testing & Quality
npm run test              # Run all tests
npm run test:server       # Backend Jest tests
npm run test:client       # Frontend tests
npm run lint              # Check code style
npm run lint:fix          # Auto-fix issues

# Docker
npm run docker:up         # Start containers
npm run docker:down       # Stop containers
npm run docker:logs       # View logs
```

---

## 🧪 Testing

### Backend Tests

```bash
cd server
npm test                 # Run tests once
npm run test:watch      # Watch mode
npm run lint            # Check code style
npm run lint:fix        # Auto-fix linting issues
```

### Frontend Tests

```bash
cd client
npm test                # Run tests
npm run lint            # Check code style
npm run lint:fix        # Auto-fix issues
```

---

## 🔄 CI/CD Pipeline

### Automated Workflows

The project includes four GitHub Actions workflows:

| Workflow | Trigger | Action |
|----------|---------|--------|
| `backend-ci.yml` | Push/PR to main (server/) | Test and lint backend |
| `frontend-ci.yml` | Push/PR to main (client/) | Test, lint, and build frontend (Vite) |
| `backend-cd.yml` | Push to main (server/) | Deploy backend to Render |
| `frontend-cd.yml` | Push to main (client/) | Deploy frontend to Vercel |

### Setting Up CI/CD

1. **GitHub Secrets** (Settings → Secrets → Actions):

```
VITE_API_URL              # Your deployed backend URL
SENTRY_DSN                # Sentry error tracking DSN
RENDER_DEPLOY_HOOK        # Render deployment webhook
VERCEL_TOKEN              # Vercel API token
VERCEL_PROJECT_ID         # Vercel project ID
VERCEL_ORG_ID             # Vercel organization ID
TEST_MONGODB_URI          # MongoDB URI for CI tests
```

2. **Monitor Workflows**: Check `.github/workflows/` or GitHub Actions tab

---

## 🚀 Deployment

### Backend Deployment (Render)

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
5. Add environment variables (MongoDB URI, frontend URL, etc.)
6. Click "Deploy"

**Backend URL Format**: `https://your-app-name.onrender.com`

### Frontend Deployment (Vercel)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` (Vite output)
5. Add environment variables (VITE_API_URL)
6. Click "Deploy"

**Frontend URL Format**: `https://your-project.vercel.app`

### Health Checks

Once deployed, verify your application:

```bash
# Backend health
curl https://your-backend-url.onrender.com/api/health

# Frontend (in browser)
https://your-project.vercel.app
```

---

## 📈 Monitoring Setup

### Sentry (Error Tracking)

1. Create account at [Sentry.io](https://sentry.io)
2. Create projects for backend and frontend
3. Copy DSN values to environment variables
4. See `monitoring/MONITORING_SETUP.md` for detailed setup

### Health Check Monitoring

The backend provides health endpoints:

- **GET** `/api/health` - Application health status
- **GET** `/api/health/ready` - Readiness probe (includes DB check)

Set up uptime monitoring with services like:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

---

## 📝 API Documentation

### Health Endpoints

#### GET /api/health
Returns application health status including uptime and memory usage.

**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2025-11-17T10:30:00.000Z",
  "uptime": 3600,
  "memory": {
    "heapUsed": "45 MB",
    "heapTotal": "128 MB",
    "external": "2 MB"
  },
  "database": {
    "connected": true,
    "readyState": 1
  }
}
```

#### GET /api/health/ready
Readiness probe - returns 503 if database is not connected.

**Response** (when ready):
```json
{
  "status": "ready",
  "timestamp": "2025-11-17T10:30:00.000Z"
}
```

---

## 🔒 Security Considerations

✅ **Implemented**:
- Helmet.js for HTTP security headers
- CORS configured with whitelisted origins
- Rate limiting (100 requests per 15 minutes)
- Input validation and sanitization
- Environment-based configuration
- Error tracking without exposing stack traces in production
- Non-root Docker user
- MongoDB Atlas network access controls

📋 **Checklist for Production**:
- [ ] Set strong MongoDB passwords
- [ ] Restrict database access by IP
- [ ] Configure custom domains with HTTPS
- [ ] Enable two-factor authentication on platform accounts
- [ ] Set up automated database backups
- [ ] Monitor error logs regularly
- [ ] Use secure session management
- [ ] Implement request logging and auditing

---

## 🐛 Troubleshooting

### Frontend/Backend connection issues
```bash
# Check both are running
curl http://localhost:5000/api/health
# Visit http://localhost:3000 in browser
```

### Frontend build fails
```bash
cd client
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### MongoDB connection error
- Verify connection string format
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### Vite dev server won't start
```bash
cd client
npm run dev
# Check port 3000 isn't in use
```

### CI/CD workflows failing
- Check GitHub Secrets are set correctly
- Verify environment variables in deployment platform
- Review workflow logs in Actions tab

---

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Sentry Documentation](https://docs.sentry.io/)

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review logs in your deployment platform
3. Check GitHub Actions workflow logs
4. See **VITE_SETUP.md** for Vite-specific help
5. Open an issue in the repository

---

## 📄 License

This project is part of the PLP MERN Stack Development program.

---

## 🎯 Next Steps

After running locally (`npm run dev`):

1. ✅ Test both frontend and backend URLs
2. ✅ Set up error tracking with Sentry
3. ✅ Configure uptime monitoring
4. ✅ Deploy to cloud (see Deployment section)
5. ✅ Set up custom domains (optional)
6. ✅ Plan database backup strategy
7. ✅ Document any custom features you add

---

**Happy Coding! 🚀**

Last Updated: November 17, 2025

✅ **Production-Ready Security**
- Helmet.js for secure HTTP headers
- CORS configuration with credentials
- Rate limiting on API endpoints
- Input validation and error handling
- Sentry integration for error tracking

✅ **CI/CD Pipeline**
- GitHub Actions workflows for automated testing and deployment
- Separate CI workflows for frontend and backend
- Automated code quality checks (ESLint, Prettier)
- Unit tests with coverage reporting

✅ **Monitoring & Observability**
- Health check endpoints (`/api/health`, `/api/health/ready`)
- Structured logging with Pino
- Error tracking with Sentry
- Performance monitoring
- Uptime monitoring support

✅ **Cloud Deployment**
- Backend: Deployed on **Render** (free tier available)
- Frontend: Deployed on **Vercel** (optimized for React)
- Both support automatic deployments from GitHub
- Custom domain support

✅ **Developer Experience**
- Docker Compose for local development
- Environment variable management
- Development and production configurations
- Comprehensive documentation

---

## 📋 Prerequisites

Before you start, ensure you have:

- **Node.js** 18+ and npm
- **Git** for version control
- **GitHub** account
- **MongoDB Atlas** account (free tier available)
- **Render** account (for backend deployment)
- **Vercel** account (for frontend deployment)

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Ab494.git
cd deployment-and-devops-essentials-Ab494
```

### 2. Backend Setup

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

**Backend runs on**: `http://localhost:5000`

### 3. Frontend Setup

In a new terminal:

```bash
cd client
cp .env.example .env
npm install
npm start
```

**Frontend runs on**: `http://localhost:3000`

### 4. MongoDB Setup

- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and database user
- Copy your connection string and add to `server/.env`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```

---

## 🐳 Docker Setup (Local Development)

Run the entire stack with Docker Compose:

```bash
docker-compose up -d
```

This starts:
- MongoDB on `localhost:27017`
- Backend on `http://localhost:5000`
- Frontend on `http://localhost:3000`

Stop the stack:

```bash
docker-compose down
```

---

## 📊 Project Structure

```
.
├── client/                          # React Frontend
│   ├── src/
│   │   ├── pages/                  # Page components (Home, Dashboard, etc.)
│   │   ├── components/             # Reusable components
│   │   ├── App.js                  # Main app with routing
│   │   └── index.js                # React entry point
│   ├── public/index.html            # HTML template
│   ├── package.json                 # Dependencies
│   ├── Dockerfile                   # Container image
│   └── vercel.json                  # Vercel deployment config
│
├── server/                          # Express Backend
│   ├── src/
│   │   ├── server.js                # Main server file with security setup
│   │   ├── config/
│   │   │   └── database.js          # MongoDB connection
│   │   ├── middleware/
│   │   │   └── errorHandler.js      # Error handling middleware
│   │   ├── routes/
│   │   │   └── health.js            # Health check routes
│   │   └── __tests__/               # Jest test files
│   ├── package.json                 # Dependencies
│   ├── Dockerfile                   # Container image
│   ├── jest.config.js               # Test configuration
│   └── .eslintrc.json               # Linting rules
│
├── .github/workflows/               # CI/CD Workflows
│   ├── backend-ci.yml               # Backend testing
│   ├── backend-cd.yml               # Backend deployment
│   ├── frontend-ci.yml              # Frontend testing
│   └── frontend-cd.yml              # Frontend deployment
│
├── deployment/                      # Deployment configs
│   ├── render.yaml                  # Render deployment config
│   ├── render-deploy.sh             # Render deploy script
│   └── vercel-deploy.sh             # Vercel deploy script
│
├── monitoring/                      # Monitoring setup
│   ├── sentry-config.js             # Sentry configuration
│   └── MONITORING_SETUP.md          # Monitoring instructions
│
├── docker-compose.yml               # Local dev environment
└── README.md                        # This file
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
NODE_ENV=development
PORT=5000
LOG_LEVEL=info
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
FRONTEND_URL=http://localhost:3000
SENTRY_DSN=
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
REACT_APP_VERSION=1.0.0
```

---

## 🧪 Testing

### Backend Tests

```bash
cd server
npm test                 # Run tests once
npm run test:watch      # Watch mode
npm run lint            # Check code style
npm run lint:fix        # Auto-fix linting issues
```

### Frontend Tests

```bash
cd client
npm test                 # Run tests once
npm run lint            # Check code style
npm run lint:fix        # Auto-fix linting issues
```

---

## 🔄 CI/CD Pipeline

### Automated Workflows

The project includes four GitHub Actions workflows:

| Workflow | Trigger | Action |
|----------|---------|--------|
| `backend-ci.yml` | Push/PR to main (server/) | Test and lint backend |
| `frontend-ci.yml` | Push/PR to main (client/) | Test, lint, and build frontend |
| `backend-cd.yml` | Push to main (server/) | Deploy backend to Render |
| `frontend-cd.yml` | Push to main (client/) | Deploy frontend to Vercel |

### Setting Up CI/CD

1. **GitHub Secrets** (Settings → Secrets → Actions):

```
REACT_APP_API_URL       # Your deployed backend URL
SENTRY_DSN              # Sentry error tracking DSN
RENDER_DEPLOY_HOOK      # Render deployment webhook
VERCEL_TOKEN            # Vercel API token
VERCEL_PROJECT_ID       # Vercel project ID
VERCEL_ORG_ID           # Vercel organization ID
TEST_MONGODB_URI        # MongoDB URI for CI tests
```

2. **Monitor Workflows**: Check `.github/workflows/` to view workflow status

---

## 🚀 Deployment

### Backend Deployment (Render)

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
5. Add environment variables (MongoDB URI, frontend URL, etc.)
6. Click "Deploy"

**Backend URL Format**: `https://your-app-name.onrender.com`

### Frontend Deployment (Vercel)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Add environment variables (API URL)
6. Click "Deploy"

**Frontend URL Format**: `https://your-project.vercel.app`

### Health Checks

Once deployed, verify your application:

```bash
# Backend health
curl https://your-backend-url.onrender.com/api/health

# Frontend (in browser)
https://your-project.vercel.app
```

---

## 📈 Monitoring Setup

### Sentry (Error Tracking)

1. Create account at [Sentry.io](https://sentry.io)
2. Create projects for backend and frontend
3. Copy DSN values to environment variables
4. See `monitoring/MONITORING_SETUP.md` for detailed setup

### Health Check Monitoring

The backend provides health endpoints:

- **GET** `/api/health` - Application health status
- **GET** `/api/health/ready` - Readiness probe (includes DB check)

Set up uptime monitoring with services like:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

---

## 📝 API Documentation

### Health Endpoints

#### GET /api/health
Returns application health status including uptime and memory usage.

**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2025-11-17T10:30:00.000Z",
  "uptime": 3600,
  "memory": {
    "heapUsed": "45 MB",
    "heapTotal": "128 MB",
    "external": "2 MB"
  },
  "database": {
    "connected": true,
    "readyState": 1
  }
}
```

#### GET /api/health/ready
Readiness probe - returns 503 if database is not connected.

**Response** (when ready):
```json
{
  "status": "ready",
  "timestamp": "2025-11-17T10:30:00.000Z"
}
```

---

## 🔒 Security Considerations

✅ **Implemented**:
- Helmet.js for HTTP security headers
- CORS configured with whitelisted origins
- Rate limiting (100 requests per 15 minutes)
- Input validation and sanitization
- Environment-based configuration
- Error tracking without exposing stack traces in production
- Non-root Docker user
- MongoDB Atlas network access controls

📋 **Checklist for Production**:
- [ ] Set strong MongoDB passwords
- [ ] Restrict database access by IP
- [ ] Configure custom domains with HTTPS
- [ ] Enable two-factor authentication on platform accounts
- [ ] Set up automated database backups
- [ ] Monitor error logs regularly
- [ ] Use secure session management
- [ ] Implement request logging and auditing

---

## 🐛 Troubleshooting

### Backend won't start
```bash
cd server
npm install
npm run dev
```

### Frontend build fails
```bash
cd client
rm -rf node_modules package-lock.json
npm install
npm run build
```

### MongoDB connection error
- Verify connection string format
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### CI/CD workflows failing
- Check GitHub Secrets are set correctly
- Verify environment variables in deployment platform
- Review workflow logs in Actions tab

---

## 📚 Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Sentry Documentation](https://docs.sentry.io/)

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review logs in your deployment platform
3. Check GitHub Actions workflow logs
4. Open an issue in the repository

---

## 📄 License

This project is part of the PLP MERN Stack Development program.

---

## 🎯 Next Steps

After deployment:

1. ✅ Test both frontend and backend URLs
2. ✅ Set up error tracking with Sentry
3. ✅ Configure uptime monitoring
4. ✅ Set up custom domains (optional)
5. ✅ Plan database backup strategy
6. ✅ Document any custom features you add

---

**Happy Coding! 🚀**

Last Updated: November 17, 2025 