import { Request, Response } from 'express';
import { IHealthService } from '../services/IHealthService';

export class HealthController {
  constructor(private healthService: IHealthService) {}

  checkHealth = async (req: Request, res: Response): Promise<void> => {
    const health = await this.healthService.getHealth();
    res.status(200).json(health);
  };
}

