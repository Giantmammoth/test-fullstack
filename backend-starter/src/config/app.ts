import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'INFO',
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test_fullstask',
};
