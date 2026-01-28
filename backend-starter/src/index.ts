import express, { Express } from 'express';
import { config } from './config/app';
import { connectMongo, disconnectMongo } from './config/database';
import { HealthService } from './services/HealthService';
import { HealthController } from './controllers/HealthController';
import { createHealthRoutes } from './routes/healthRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFound';
import { logger } from './utils/logger';

const app: Express = express();

// Middlewares globaux
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// Initialisation des dépendances (Dependency Injection)
const healthService = new HealthService();
const healthController = new HealthController(healthService);

// Routes (uniquement healthcheck)
app.use('/', createHealthRoutes(healthController));

// Gestion des erreurs
app.use(notFoundHandler);
app.use(errorHandler);

// Démarrage du serveur
const PORT = config.port;

async function start(): Promise<void> {
  await connectMongo();

  const server = app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
    logger.info(`Environment: ${config.nodeEnv}`);
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Shutting down...');
    server.close(async () => {
      await disconnectMongo();
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

start().catch((err) => {
  logger.error('Fatal startup error', err);
  process.exit(1);
});

export default app;
