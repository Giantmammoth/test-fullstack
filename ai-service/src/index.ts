import express, { Express } from 'express';
import { config } from './config/app';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFound';
import { logger } from './utils/logger';
import { HealthService } from './services/HealthService';
import { HealthController } from './controllers/HealthController';
import { createHealthRoutes } from './routes/healthRoutes';

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

app.listen(PORT, () => {
  logger.info(`AI Service is running on port ${PORT}`);
  logger.info(`Environment: ${config.nodeEnv}`);
  logger.info(`Service: ${config.serviceName}`);
});

export default app;

