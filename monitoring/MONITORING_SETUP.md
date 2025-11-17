# Sentry Setup Instructions
# For error tracking and performance monitoring

## Backend Setup (Express.js)

1. Create account at https://sentry.io
2. Create a Node.js project
3. Copy the DSN from project settings
4. Add to server/.env:
   ```
   SENTRY_DSN=https://xxxxx@o123456.ingest.sentry.io/123456
   ```

5. The server/src/server.js already has Sentry initialized

## Frontend Setup (React)

1. Create account at https://sentry.io
2. Create a React project
3. Copy the DSN from project settings
4. Add to client/.env:
   ```
   REACT_APP_SENTRY_DSN=https://xxxxx@o123456.ingest.sentry.io/789012
   ```

5. Import and initialize in client/src/index.js:
   ```javascript
   import * as Sentry from "@sentry/react";
   
   if (process.env.REACT_APP_SENTRY_DSN) {
     Sentry.init({
       dsn: process.env.REACT_APP_SENTRY_DSN,
       environment: process.env.REACT_APP_ENV,
       tracesSampleRate: 1.0,
     });
   }
   ```

## Monitoring Features

- Error tracking and stack traces
- Performance monitoring
- Release tracking
- Custom breadcrumbs
- User feedback

## Health Checks

- Backend: GET /api/health
- Backend: GET /api/health/ready
