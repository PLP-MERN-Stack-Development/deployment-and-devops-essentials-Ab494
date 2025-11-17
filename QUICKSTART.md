# 🎯 MERN Stack Deployment Project - Quick Start Guide

## ✨ What You Now Have

A **production-ready MERN application** with:

✅ Full-stack app (React frontend, Express backend, MongoDB database)  
✅ Complete CI/CD pipelines (GitHub Actions)  
✅ Error monitoring (Sentry ready)  
✅ Health check endpoints  
✅ Docker support  
✅ Security best practices  
✅ Comprehensive documentation  

---

## 🚀 Immediate Next Steps (15-30 minutes)

### 1. **Install Dependencies Locally** (Optional - for testing)

```bash
# Root directory install script
npm run install:all

# Or manually:
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### 2. **Run Locally with Docker** (Recommended for quick test)

```bash
docker-compose up -d
```

Then open:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000/api`
- Health: `http://localhost:5000/api/health`

Stop with:
```bash
docker-compose down
```

### 3. **Push to GitHub**

```bash
cd /home/vanso/Documents/projects/mern-stack/deployment-and-devops-essentials-Ab494
git add .
git commit -m "feat: complete MERN stack with CI/CD and monitoring"
git push origin main
```

---

## 📋 Deployment Checklist (Next 1-2 hours)

### Phase 1: Account Setup

- [ ] **MongoDB Atlas**
  - Go to https://www.mongodb.com/cloud/atlas
  - Create a free cluster
  - Create a database user
  - Whitelist your IP (and Render's IP: 0.0.0.0/0)
  - Copy connection string (looks like: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`)

- [ ] **Render.com** (Backend)
  - Go to https://dashboard.render.com
  - Sign up with GitHub
  - Note: You'll create the service in Phase 2

- [ ] **Vercel** (Frontend)
  - Go to https://vercel.com
  - Sign up with GitHub
  - Note: You'll create the project in Phase 2

- [ ] **Sentry.io** (Error Tracking - Optional but recommended)
  - Go to https://sentry.io
  - Create account
  - Create Node.js project (get DSN for backend)
  - Create React project (get DSN for frontend)

### Phase 2: Backend Deployment (Render)

1. **Create Render Service**:
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Select "Deploy from a Git repository"
   - Choose your GitHub repository
   - Configure:
     ```
     Name: mern-backend (or your choice)
     Runtime: Node
     Build Command: cd server && npm install
     Start Command: cd server && npm start
     Environment: Select "Production"
     ```

2. **Add Environment Variables** in Render dashboard:
   ```
   NODE_ENV=production
   PORT=3000
   MONGODB_URI=<paste from MongoDB Atlas>
   FRONTEND_URL=https://your-vercel-domain.vercel.app
   LOG_LEVEL=info
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   SENTRY_DSN=<optional - from Sentry>
   ```

3. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - Grab your backend URL: `https://mern-backend.onrender.com`

4. **Test Backend**:
   ```bash
   curl https://mern-backend.onrender.com/api/health
   ```

### Phase 3: Frontend Deployment (Vercel)

1. **Create Vercel Project**:
   - Go to https://vercel.com/dashboard
   - Click "Add New..." → "Project"
   - Import GitHub repository
   - Configure:
     ```
     Framework Preset: Create React App
     Root Directory: client
     Build Command: npm run build
     Output Directory: build
     Install Command: npm install
     ```

2. **Add Environment Variables**:
   - In Vercel project settings → Environment Variables
   - Add: `REACT_APP_API_URL=https://mern-backend.onrender.com/api`

3. **Deploy**:
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Grab your frontend URL: `https://your-project.vercel.app`

4. **Test Frontend**:
   - Visit your Vercel URL in browser
   - Check console for any API connection errors

### Phase 4: Update GitHub Secrets (for CI/CD)

Go to GitHub repo Settings → Secrets and variables → Actions, add:

```
REACT_APP_API_URL=https://mern-backend.onrender.com/api
RENDER_DEPLOY_HOOK=<Render deploy hook URL - see Render service settings>
VERCEL_TOKEN=<Get from Vercel account settings>
VERCEL_PROJECT_ID=<Found in Vercel project settings>
VERCEL_ORG_ID=<Your Vercel org ID>
TEST_MONGODB_URI=<MongoDB connection string for testing>
SENTRY_DSN=<Optional - from Sentry backend project>
```

### Phase 5: Update README.md with URLs

After deployment, update `README.md` with your actual URLs:

```markdown
## 🚀 Deployment URLs

**Backend API**: https://mern-backend.onrender.com  
**Frontend App**: https://your-project.vercel.app
```

---

## 🔄 How CI/CD Works (After First Push)

When you push to main:

1. **GitHub Actions trigger** (runs automatically)
2. **Backend CI** (`backend-ci.yml`):
   - Runs tests
   - Runs linter (ESLint)
   - Builds backend
3. **Frontend CI** (`frontend-ci.yml`):
   - Runs tests
   - Runs linter
   - Builds React app
4. **If CI passes, CD triggers**:
   - **Backend CD**: Deploys to Render automatically
   - **Frontend CD**: Deploys to Vercel automatically

Check workflow status in GitHub → Actions tab.

---

## 📊 Project File Locations

| Component | Path | Purpose |
|-----------|------|---------|
| **Backend** | `/server` | Express.js API |
| **Frontend** | `/client` | React application |
| **CI/CD** | `/.github/workflows` | GitHub Actions |
| **Deployment** | `/deployment` | Render & Vercel configs |
| **Monitoring** | `/monitoring` | Sentry setup |
| **Docker** | `/docker-compose.yml` | Local dev environment |

---

## 🧪 Testing Your Setup

### Before Deployment (Local)
```bash
# Start everything locally
docker-compose up -d

# Test backend
curl http://localhost:5000/api/health

# Open frontend
# Visit http://localhost:3000 in browser
```

### After Deployment (Production)
```bash
# Test backend API
curl https://mern-backend.onrender.com/api/health

# Test frontend
# Visit https://your-project.vercel.app in browser

# Check CI/CD workflows
# Visit GitHub repo → Actions tab
```

---

## 🐛 Common Issues & Fixes

### "Cannot find MongoDB URI"
- ✅ Add `MONGODB_URI` to Render environment variables
- ✅ Use `mongodb+srv://` format (with authentication)

### "Frontend can't reach backend API"
- ✅ Update `REACT_APP_API_URL` in Vercel env vars to actual backend URL
- ✅ Ensure backend CORS allows your Vercel domain
- ✅ Check browser DevTools console for CORS errors

### "CI/CD workflows not running"
- ✅ Check that secrets are added to GitHub
- ✅ Verify workflow files in `.github/workflows/`
- ✅ Check GitHub Actions logs for errors

### "Docker containers won't start"
- ✅ Ensure Docker is installed and running
- ✅ Check port availability (3000, 5000, 27017)
- ✅ Run `docker-compose logs` to see errors

---

## 📈 Performance Tips

1. **Frontend**:
   - React code-splitting is enabled (routes lazy-load)
   - Cache control is set in vercel.json
   - Build is minified and optimized

2. **Backend**:
   - MongoDB connection pooling configured
   - Rate limiting prevents abuse
   - Logging with Pino for performance

3. **Database**:
   - Use MongoDB Atlas free tier (covers small apps)
   - Connection pooling enabled
   - Index important fields

---

## 🔒 Security Reminders

Before going live:
- [ ] Change MongoDB default passwords
- [ ] Restrict MongoDB IP whitelist (don't use 0.0.0.0/0 in production)
- [ ] Set strong API rate limits
- [ ] Enable HTTPS (auto on Vercel & Render)
- [ ] Review environment variables (no secrets in code)
- [ ] Set up error tracking with Sentry

---

## 📞 Getting Help

| Issue | Solution |
|-------|----------|
| Backend won't deploy | Check Render logs: Dashboard → Service → Logs |
| Frontend build fails | Check Vercel logs: Project → Deployments → Logs |
| API connection errors | Check REACT_APP_API_URL environment variable |
| Tests failing locally | Run `npm install` in server/ and client/ |
| Can't connect to MongoDB | Verify connection string and IP whitelist |

---

## 🎓 What You've Learned (Week 7)

✅ Preparing apps for production (builds, optimization, env vars)  
✅ Deploying full-stack apps to cloud platforms  
✅ Setting up CI/CD pipelines with GitHub Actions  
✅ Configuring environment-based deployments  
✅ Monitoring and error tracking  
✅ Health checks and uptime monitoring  
✅ Docker containerization  
✅ Security best practices  

---

## 🚀 You're Ready!

Your MERN stack app is now:
- ✅ Coded and tested locally
- ✅ Ready to deploy to production
- ✅ Set up for CI/CD automation
- ✅ Configured for monitoring
- ✅ Documented for maintenance

**Next: Follow the Deployment Checklist above to go live!**

---

**Questions?** Check README.md for detailed docs, or review the Week7-Assignment.md for requirements.

**Good luck! 🎉**
