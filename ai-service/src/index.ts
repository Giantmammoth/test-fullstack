import express, { Express } from 'express';
import cors from 'cors';
import { config } from './config/app';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFound';
import { logger } from './utils/logger';
import { HealthService } from './services/HealthService';
import { HealthController } from './controllers/HealthController';
import { createHealthRoutes } from './routes/healthRoutes';
import { AnalyzeService } from './services/AnalyzeService';
import { AnalyzeController } from './controllers/AnalyzeController';
import { createAnalyzeRoutes } from './routes/analyzeRoutes';

const app: Express = express();

// CORS middleware (doit être avant les autres middlewares)
app.use(cors());

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

const analyzeService = new AnalyzeService();
const analyzeController = new AnalyzeController(analyzeService);

// Routes
app.use('/', createHealthRoutes(healthController));
app.use('/api/analyze', createAnalyzeRoutes(analyzeController));

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

