import express from 'express';
import mongoose from 'mongoose';

export const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
  const uptime = process.uptime();
  const memoryUsage = process.memoryUsage();
  const dbConnected = mongoose.connection.readyState === 1;

  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(uptime),
    memory: {
      heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024) + ' MB',
      heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024) + ' MB',
      external: Math.round(memoryUsage.external / 1024 / 1024) + ' MB',
    },
    database: {
      connected: dbConnected,
      readyState: mongoose.connection.readyState,
    },
  });
});

healthRouter.get('/ready', (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;

  if (!dbConnected) {
    return res.status(503).json({
      status: 'not ready',
      message: 'Database not connected',
    });
  }

  res.status(200).json({
    status: 'ready',
    timestamp: new Date().toISOString(),
  });
});
