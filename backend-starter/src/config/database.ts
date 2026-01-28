import { config } from './app';
import { logger } from '../utils/logger';

export async function connectMongo(): Promise<void> {
  // On charge mongoose dynamiquement pour éviter une erreur TypeScript si les deps
  // ne sont pas encore installées localement.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mongoose = require('mongoose') as any;
  const uri = config.mongoUri;

  try {
    await mongoose.connect(uri);
    logger.info(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
  } catch (err) {
    logger.error('MongoDB connection failed', err);
    throw err;
  }
}

export async function disconnectMongo(): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mongoose = require('mongoose') as any;
  try {
    await mongoose.disconnect();
    logger.info('MongoDB disconnected');
  } catch (err) {
    logger.error('MongoDB disconnect failed', err);
  }
}

