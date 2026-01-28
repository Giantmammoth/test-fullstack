import { Request, Response } from 'express';
import { IHistoriqueService } from '../services/IHistoriqueService';
import { CreateHistoriqueDto } from '../models/Historique';

export class HistoriqueController {
  constructor(private historiqueService: IHistoriqueService) {}

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const historiques = await this.historiqueService.getAll();
      res.status(200).json({
        success: true,
        data: historiques,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching historiques',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const historique = await this.historiqueService.getById(id);
      res.status(200).json({
        success: true,
        data: historique,
      });
    } catch (error) {
      const statusCode = error instanceof Error && 'statusCode' in error 
        ? (error as { statusCode: number }).statusCode 
        : 500;
      res.status(statusCode).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  saveOne = async (req: Request, res: Response): Promise<void> => {
    try {
      const data: CreateHistoriqueDto = req.body;
      const historique = await this.historiqueService.saveOne(data);
      res.status(201).json({
        success: true,
        data: historique,
      });
    } catch (error) {
      const statusCode = error instanceof Error && 'statusCode' in error 
        ? (error as { statusCode: number }).statusCode 
        : 500;
      res.status(statusCode).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };
}
