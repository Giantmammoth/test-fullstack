import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env.AI_SERVICE_PORT || '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'INFO',
  serviceName: 'ai-service',
};

