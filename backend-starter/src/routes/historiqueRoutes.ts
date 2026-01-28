import { Router } from 'express';
import { HistoriqueController } from '../controllers/HistoriqueController';
import { validate } from '../middlewares/validation';
import { historiqueSchemas } from '../validations/historiqueSchemas';

export const createHistoriqueRoutes = (historiqueController: HistoriqueController): Router => {
  const router = Router();

  router.get(
    '/',
    historiqueController.getAll
  );

  router.get(
    '/:id',
    validate(historiqueSchemas.getById),
    historiqueController.getById
  );

  router.post(
    '/',
    validate(historiqueSchemas.saveOne),
    historiqueController.saveOne
  );

  return router;
};
