import { Router } from 'express';
import { AnalyzeController } from '../controllers/AnalyzeController';
import { validate } from '../middlewares/validation';
import { analyzeSchemas } from '../validations/analyzeSchemas';

export const createAnalyzeRoutes = (analyzeController: AnalyzeController): Router => {
  const router = Router();

  router.post(
    '/',
    validate(analyzeSchemas.analyze),
    analyzeController.analyze
  );

  return router;
};
