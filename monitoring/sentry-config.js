// monitoring/sentry-config.js
// Configuration for Sentry error tracking (both frontend and backend)

export const sentryConfig = {
  // Backend (Node.js) Configuration
  backend: {
    environment: process.env.NODE_ENV || 'development',
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    maxBreadcrumbs: 50,
    attachStacktrace: true,
    denyUrls: [
      // Browser extensions
      /extensions\//i,
      /^chrome:\/\//i,
      // Third-party scripts
      /graph\.instagram\.com/i,
      /connect\.facebook\.net/i,
    ],
    beforeSend(event, _hint) {
      // Filter out certain errors in production
      if (event.exception) {
        const error = event.exception.values[0];
        if (error.type === 'NetworkError') {
          return null; // Don't send network errors
        }
      }
      return event;
    },
  },

  // Frontend (React) Configuration
  frontend: {
    environment: process.env.REACT_APP_ENV || 'development',
    tracesSampleRate: process.env.REACT_APP_ENV === 'production' ? 0.1 : 1.0,
    integrations: [
      // Will be added during initialization
    ],
  },
};

export default sentryConfig;
